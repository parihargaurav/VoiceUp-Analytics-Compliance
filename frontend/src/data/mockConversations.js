export const mockConversations = [
  {
    id: 1,
    created_at: '2024-05-25T10:00:00Z',
    messages: [
      { sender: 'agent', text: 'Hi Alex! Welcome to VoiceUp Support. How can I help you?' },
      { sender: 'customer', text: "My internet keeps disconnecting and it's really frustrating!" },
      { sender: 'agent', text: "I'm so sorry for the inconvenience, Alex. Let me check this for you." },
      { sender: 'customer', text: "Thanks, I hope it gets fixed soon." },
      { sender: 'agent', text: 'I have reset your connection. Could you please check now?' },
      { sender: 'customer', text: "Yes, it's working now. Thank you!" }
    ],
    emotion_summary: { happy: 1, angry: 1, neutral: 4 },
    compliance_summary: {
      greeted: true,
      apologized: true,
      confirmed_resolution: true,
      avoided_claims: true,
      personalized: true
    },
    overall_compliance_score: 100
  },
  {
    id: 2,
    created_at: '2024-05-25T12:00:00Z',
    messages: [
      { sender: 'agent', text: 'Hello, how can I assist you today?' },
      { sender: 'customer', text: 'My router is showing a red light and no internet.' },
      { sender: 'agent', text: 'No worries, our routers usually fix themselves in a few minutes.' },
      { sender: 'customer', text: 'Are you sure? This has been happening for an hour.' },
      { sender: 'agent', text: 'Guaranteed it will be fine soon!' }
    ],
    emotion_summary: { happy: 0, angry: 1, neutral: 4 },
    compliance_summary: {
      greeted: true,
      apologized: false,
      confirmed_resolution: false,
      avoided_claims: false,
      personalized: false
    },
    overall_compliance_score: 20
  },
  {
    id: 3,
    created_at: '2024-05-25T13:30:00Z',
    messages: [
      { sender: 'agent', text: 'Good afternoon! How can I help you with your VoiceUp service?' },
      { sender: 'customer', text: 'I was overcharged on my bill this month.' },
      { sender: 'agent', text: 'I apologize for the confusion. Let me look into your bill details.' },
      { sender: 'customer', text: 'Thank you.' },
      { sender: 'agent', text: 'You are correct, there was an error. I have issued a refund.' }
    ],
    emotion_summary: { happy: 1, angry: 1, neutral: 3 },
    compliance_summary: {
      greeted: true,
      apologized: true,
      confirmed_resolution: true,
      avoided_claims: true,
      personalized: true
    },
    overall_compliance_score: 100
  },
  {
    id: 4,
    created_at: '2024-05-25T14:15:00Z',
    messages: [
      { sender: 'agent', text: 'Hi, how can I help you?' },
      { sender: 'customer', text: 'The technician didn’t show up for my appointment.' },
      { sender: 'agent', text: 'That’s odd. Our technicians are usually very punctual.' },
      { sender: 'customer', text: 'This is really inconvenient.' }
    ],
    emotion_summary: { happy: 0, angry: 1, neutral: 3 },
    compliance_summary: {
      greeted: true,
      apologized: false,
      confirmed_resolution: false,
      avoided_claims: false,
      personalized: false
    },
    overall_compliance_score: 20
  },
  {
    id: 5,
    created_at: '2024-05-25T15:00:00Z',
    messages: [
      { sender: 'agent', text: 'Hello Sarah! What can I do for you today?' },
      { sender: 'customer', text: 'Can you help me upgrade my plan?' },
      { sender: 'agent', text: 'Absolutely, Sarah! I can guide you through the available plans.' },
      { sender: 'customer', text: 'Great, thanks!' }
    ],
    emotion_summary: { happy: 2, angry: 0, neutral: 2 },
    compliance_summary: {
      greeted: true,
      apologized: false,
      confirmed_resolution: true,
      avoided_claims: true,
      personalized: true
    },
    overall_compliance_score: 90
  },
  {
    id: 6,
    created_at: '2024-05-25T16:10:00Z',
    messages: [
      { sender: 'agent', text: 'Hi, how can I help?' },
      { sender: 'customer', text: 'Why is my internet so slow?' },
      { sender: 'agent', text: 'Sorry for the trouble. I will run a speed check on your line.' },
      { sender: 'customer', text: 'Please do, it’s unbearable.' },
      { sender: 'agent', text: 'Tests show an outage. Our team is working on it and service should improve soon.' }
    ],
    emotion_summary: { happy: 0, angry: 1, neutral: 4 },
    compliance_summary: {
      greeted: true,
      apologized: true,
      confirmed_resolution: false,
      avoided_claims: true,
      personalized: false
    },
    overall_compliance_score: 60
  },
  {
    id: 7,
    created_at: '2024-05-25T17:05:00Z',
    messages: [
      { sender: 'agent', text: 'Hello! How can I be of assistance?' },
      { sender: 'customer', text: 'I want to cancel my subscription.' },
      { sender: 'agent', text: 'I’m sorry to hear that. May I ask the reason for cancellation?' },
      { sender: 'customer', text: 'I’m moving abroad.' },
      { sender: 'agent', text: 'Thank you for letting us know. I have processed the cancellation.' }
    ],
    emotion_summary: { happy: 0, angry: 0, neutral: 5 },
    compliance_summary: {
      greeted: true,
      apologized: true,
      confirmed_resolution: true,
      avoided_claims: true,
      personalized: false
    },
    overall_compliance_score: 85
  },
  {
    id: 8,
    created_at: '2024-05-25T18:30:00Z',
    messages: [
      { sender: 'agent', text: 'Hi! How can I help?' },
      { sender: 'customer', text: 'My bill is much higher than usual.' },
      { sender: 'agent', text: 'There might be some extra charges this month.' },
      { sender: 'customer', text: 'What kind of charges? I didn’t change anything.' },
      { sender: 'agent', text: 'Let me check that for you.' }
    ],
    emotion_summary: { happy: 0, angry: 1, neutral: 4 },
    compliance_summary: {
      greeted: true,
      apologized: false,
      confirmed_resolution: false,
      avoided_claims: false,
      personalized: false
    },
    overall_compliance_score: 20
  },
  {
    id: 9,
    created_at: '2024-05-25T19:00:00Z',
    messages: [
      { sender: 'agent', text: 'Good evening! How may I assist?' },
      { sender: 'customer', text: 'I keep getting spam calls after signing up.' },
      { sender: 'agent', text: 'I’m sorry to hear that. I will check your privacy settings.' },
      { sender: 'customer', text: 'Thanks, please help.' },
      { sender: 'agent', text: 'I have enabled extra spam protection on your account.' }
    ],
    emotion_summary: { happy: 1, angry: 1, neutral: 3 },
    compliance_summary: {
      greeted: true,
      apologized: true,
      confirmed_resolution: true,
      avoided_claims: true,
      personalized: true
    },
    overall_compliance_score: 100
  },
  {
    id: 10,
    created_at: '2024-05-25T20:10:00Z',
    messages: [
      { sender: 'agent', text: 'Hello, how can I help?' },
      { sender: 'customer', text: 'You guys never solve my problems on time.' },
      { sender: 'agent', text: 'We try our best to address all issues as soon as possible.' },
      { sender: 'customer', text: 'I just want my internet fixed.' },
      { sender: 'agent', text: 'I will escalate this to our senior technician.' }
    ],
    emotion_summary: { happy: 0, angry: 2, neutral: 3 },
    compliance_summary: {
      greeted: true,
      apologized: false,
      confirmed_resolution: false,
      avoided_claims: false,
      personalized: false
    },
    overall_compliance_score: 15
  }
];