from django.db import models

class Conversation(models.Model):
    id = models.IntegerField(primary_key=True)  # use id from mock_data
    created_at = models.DateTimeField(auto_now_add=True)

class Message(models.Model):
    conversation = models.ForeignKey(Conversation, related_name='messages', on_delete=models.CASCADE)
    sender = models.CharField(max_length=50)  # agent or customer
    text = models.TextField()

class AnalysisResult(models.Model):
    conversation = models.OneToOneField(Conversation, related_name='analysis', on_delete=models.CASCADE)
    emotion_summary = models.JSONField()
    compliance_summary = models.JSONField()
    overall_compliance_score = models.IntegerField()
