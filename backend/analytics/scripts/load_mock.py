import json
from pathlib import Path
from analytics.models import Conversation, Message
from django.conf import settings

def run():
    try:
        print(f"Using DB: {settings.DATABASES['default']['NAME']}")

        # Path to mock_data.json inside analytics/data/
        data_path = Path(__file__).resolve().parent.parent / "data" / "mock_data.json"

        if not data_path.exists():
            print(f"Mock data file not found at: {data_path}")
            return

        with open(data_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        # Clear existing data
        Conversation.objects.all().delete()
        Message.objects.all().delete()
        print("Cleared old data.")

        # Insert new data
        for conv in data:
            conv_id = conv["conversation_id"]
            conversation = Conversation.objects.create(id=conv_id)
            print(f"Inserted conversation ID: {conv_id}")

            for msg in conv.get("messages", []):
                Message.objects.create(
                    conversation=conversation,
                    sender=msg["sender"],
                    text=msg["text"]
                )
            print(f"Added {len(conv.get('messages', []))} messages to conversation {conv_id}")

        print("✅ Mock data loaded successfully into PostgreSQL.")
        
    except Exception as e:
        print(f"❌ Error in load_mock: {e}")
