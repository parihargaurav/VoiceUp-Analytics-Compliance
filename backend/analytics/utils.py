def analyze_conversation(convo):
    from textblob import TextBlob # type: ignore
    import re

    messages = convo.messages.all()
    emotion_summary = {}
    compliance_summary = {
        "greeting": False,
        "apology": False,
        "resolution": False,
        "no_false_claim": True,
        "personalization": False
    }

    for msg in messages:
        if msg.sender == "agent":
            if re.search(r"hi|hello|welcome", msg.text, re.I):
                compliance_summary["greeting"] = True
            if "sorry" in msg.text.lower():
                compliance_summary["apology"] = True
            if "reset" in msg.text.lower() or "resolved" in msg.text.lower():
                compliance_summary["resolution"] = True
            if "guaranteed" in msg.text.lower() or "forever" in msg.text.lower():
                compliance_summary["no_false_claim"] = False
            if re.search(r"\bAlex\b|\bJohn\b", msg.text):  # example names
                compliance_summary["personalization"] = True

        if msg.sender == "customer":
            sentiment = TextBlob(msg.text).sentiment.polarity
            if sentiment < -0.2:
                emotion_summary[msg.id] = "angry"
            elif sentiment > 0.2:
                emotion_summary[msg.id] = "happy"
            else:
                emotion_summary[msg.id] = "neutral"

    score = sum(compliance_summary.values()) * 20
    return {
        "emotion_summary": emotion_summary,
        "compliance_summary": compliance_summary,
        "overall_compliance_score": score
    }
