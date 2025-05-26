from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Conversation, Message, AnalysisResult
from .serializers import ConversationSerializer, AnalysisResultSerializer
from .utils import analyze_conversation  # custom logic

@api_view(['GET'])
def get_conversations(request):
    convos = Conversation.objects.all()
    return Response(ConversationSerializer(convos, many=True).data)

@api_view(['GET'])
def get_conversation_detail(request, pk):
    convo = Conversation.objects.get(id=pk)
    return Response(ConversationSerializer(convo).data)

@api_view(['POST'])
def analyze_conversation_api(request, pk):
    convo = Conversation.objects.get(id=pk)
    analysis = analyze_conversation(convo)
    result, _ = AnalysisResult.objects.update_or_create(
        conversation=convo,
        defaults=analysis
    )
    return Response(AnalysisResultSerializer(result).data)

@api_view(['GET'])
def get_summary(request):
    results = AnalysisResult.objects.all()
    compliant = results.filter(overall_compliance_score=100).count()
    total = results.count()
    violations = {}

    for r in results:
        for rule, passed in r.compliance_summary.items():
            if not passed:
                violations[rule] = violations.get(rule, 0) + 1

    emotion_distribution = {}
    for r in results:
        for e in r.emotion_summary.values():
            emotion_distribution[e] = emotion_distribution.get(e, 0) + 1

    return Response({
        'compliance_percent': round((compliant / total) * 100, 2) if total else 0,
        'top_violated_rules': sorted(violations.items(), key=lambda x: -x[1]),
        'emotion_distribution': emotion_distribution
    })
