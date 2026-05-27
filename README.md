# Poway Veterans Organization — Website Redesign
### Project Handoff & Status Document

> **Status:** 🚧 Early Exploration / In Progress  
> **Last Updated:** May 2026

---

## Overview

This project is an early-stage redesign and digital tooling effort for the **Poway Veterans Organization (PVO)**. The goal is to modernize the organization's web presence and build AI-assisted tools that help veterans navigate eligibility, connect with volunteers, and get quick answers to common questions.

The three components built so far can be found on this website: https://pvo.opencodingsociety.com/

---

## Project Files

### 1. `pvo-chatbot.html` — AI Chatbot
An AI-powered chat interface built with the **Groq API**. Designed to give veterans a conversational way to ask questions about PVO services, eligibility, events, and resources.

- **Tech:** Plain HTML/CSS/JS + Groq API
- **Status:** ✅ Mostly complete — minor refinements may remain
- **Key decisions:** Groq was chosen for its fast inference speeds, which keeps the chat feel responsive and natural
- **To run:** Open `pvo-chatbot.html` directly in a browser. Requires a valid Groq API key set in the file.

---

### 2. `prescreener.md` — Eligibility Prescreener
A prescreener flow to help veterans (or their families) quickly determine whether they may qualify for PVO services or programs before submitting a full application.

- **Status:** 🚧 In Progress
- **Purpose:** Reduce friction for new applicants and filter inquiries before they reach staff
- **Current focus:** Integrating the **Gemini API** to extract data from uploaded veteran IDs, improving accuracy of eligibility determination
- **Format:** Markdown file

---

### 3. `volunteer.md` — Volunteer Application Form
A form spec for prospective volunteers to express interest, share availability, and describe relevant skills or military background.

- **Status:** ✅ Complete
- **Purpose:** Streamline volunteer intake and give coordinators structured data to work with
- **Format:** Markdown file

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Plain HTML, CSS, JavaScript |
| AI / Chat | [Groq API](https://groq.com) |
| AI / ID Extraction | [Gemini API](https://ai.google.dev) |
| Backend | Python / Flask |
| Database | SQLite |

---

## How to Run

1. Clone or download this repository
2. Create and activate a virtual environment:
```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
```
3. Install Python dependencies: `pip install -r requirements.txt`
4. Start the Flask server in backend: `python app.py`
5. Open the app in a browser at `http://localhost:4500`
6. For the chatbot — add your Groq API key where indicated (environment variable or config file)
---

## What's Been Done

- [x] Volunteer form — complete
- [x] AI chatbot — mostly complete
- [x] Flask backend set up
- [x] SQLite database set up
- [ ] Eligibility prescreener — Gemini API ID extraction in progress
- [ ] UI polish and mobile responsiveness
- [ ] Connect forms to Flask routes and SQLite
- [ ] User testing with veterans

---

## Next Steps

### 🎨 UI Polish & Mobile Responsiveness
The current chatbot prototype is functional but unstyled for production. All three components need a cohesive visual design pass and should be fully responsive on mobile — many veterans access services from phones.

### 🗄️ Backend & Database Integration
A Flask backend and SQLite database are in place. The next milestone is wiring the volunteer form and prescreener up to it so that submissions are actually saved and accessible to staff.

### 👥 User Testing with Veterans
Before any wider rollout, the tools — especially the chatbot and prescreener — should be tested with real veterans and PVO staff to validate that the language, flow, and outputs actually serve their needs.

---

## Notes for the Next Person

- The backend is **Flask (Python)** — keep dependencies minimal and documented in a `requirements.txt` so the next person can get up and running with `pip install -r requirements.txt`.
- The chatbot uses **Groq** (not OpenAI or Anthropic) — the API interface is similar but the base URL and model names differ. Check [Groq's docs](https://console.groq.com/docs) if you need to swap models. The Groq API key should be stored as an environment variable, never hardcoded.
- There is no login or authentication yet. The SQLite database is in place but keep privacy and access control in mind as more veteran data (especially health/benefits-related) gets stored.
- This is a volunteer/community project — keep solutions simple and maintainable by non-engineers where possible.

---

## Contact / Contributors

> *Alice Li @alicewrli009
> Brandon Cheah @BrandonCheah153*

---

*Poway Veterans Organization — Serving those who served.*
