from django.urls import path
from . import views

urlpatterns = [
    path('conversations/', views.get_conversations),
    path('conversations/<int:pk>/', views.get_conversation_detail),
    path('analyze/<int:pk>/', views.analyze_conversation_api),
    path('summary/', views.get_summary),
]
