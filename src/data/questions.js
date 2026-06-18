export const subScoreLabels = [
  "Integrity Judgment",
  "Conflict Radar",
  "Escalation Courage",
  "Policy Awareness",
];

export const missionQuestions = [
  {
    id: "M01",
    theme: "Gift and Hospitality from Vendors",
    subScore: "Conflict Radar",
    location: "Vendor Engagement Desk",
    question:
      "A vendor involved in an active procurement exercise sends you a premium festive hamper and invites you to lunch before the evaluation meeting. What is your decision?",
    options: [
      {
        id: "M01-A",
        text: "Politely decline the benefit, record the offer, and inform the Integrity or Procurement secretariat.",
        points: 10,
        feedback: "Correct",
        quality: "Best answer",
        explanation:
          "This protects independence and manages the actual or perceived conflict before evaluation starts.",
      },
      {
        id: "M01-B",
        text: "Ask whether the hamper can be redirected to the company gift register while you skip the lunch.",
        points: 6,
        feedback: "Correct",
        quality: "Acceptable answer",
        explanation:
          "Declaring and redirecting the gift is better than accepting it, but the offer should still be escalated because timing matters.",
      },
      {
        id: "M01-C",
        text: "Accept the hamper only because it is a festive custom and does not affect your judgement.",
        points: 3,
        feedback: "Risky",
        quality: "Risky answer",
        explanation:
          "Customary gifts can still create a red flag when a vendor has pending business with the organisation.",
      },
      {
        id: "M01-D",
        text: "Ask the vendor to send the hamper to your home address so it stays private.",
        points: 0,
        feedback: "Wrong",
        quality: "Wrong answer",
        explanation:
          "Hiding a benefit from a vendor creates serious integrity and ABMS control concerns.",
      },
    ],
  },
  {
    id: "M02",
    theme: "Conflict of Interest",
    subScore: "Conflict Radar",
    location: "Declaration Review Panel",
    question:
      "You are appointed to a technical evaluation committee and realise your cousin is a director of one bidder. The bidder is qualified. What should you do?",
    options: [
      {
        id: "M02-A",
        text: "Declare the relationship immediately and let the committee decide whether you must be recused.",
        points: 10,
        feedback: "Correct",
        quality: "Best answer",
        explanation:
          "Transparent declaration allows the organisation to manage the conflict before any decision is influenced.",
      },
      {
        id: "M02-B",
        text: "Continue only with administrative tasks while waiting for written guidance from the secretariat.",
        points: 6,
        feedback: "Correct",
        quality: "Acceptable answer",
        explanation:
          "Pausing decision-making helps, but the relationship still needs a formal declaration and management decision.",
      },
      {
        id: "M02-C",
        text: "Stay in the committee because you believe you can be objective.",
        points: 3,
        feedback: "Risky",
        quality: "Risky answer",
        explanation:
          "Integrity risk includes perceived conflict, not only proven bias.",
      },
      {
        id: "M02-D",
        text: "Tell your cousin to submit a better commercial offer so the company wins fairly.",
        points: 0,
        feedback: "Wrong",
        quality: "Wrong answer",
        explanation:
          "Giving an interested party special access undermines fair competition and procurement governance.",
      },
    ],
  },
  {
    id: "M03",
    theme: "Procurement Evaluation",
    subScore: "Integrity Judgment",
    location: "Tender Evaluation Room",
    question:
      "During evaluation, a senior stakeholder says the team should favour a long-time vendor because they are easier to work with, even though another bidder scored higher. What is the right call?",
    options: [
      {
        id: "M03-A",
        text: "Keep to the approved criteria, document the concern, and escalate any attempt to override the evaluation.",
        points: 10,
        feedback: "Correct",
        quality: "Best answer",
        explanation:
          "Procurement evaluation must follow approved criteria and be supported by a clear audit trail.",
      },
      {
        id: "M03-B",
        text: "Ask the committee chair to record a formal justification before any recommendation changes.",
        points: 6,
        feedback: "Correct",
        quality: "Acceptable answer",
        explanation:
          "Documentation is important, but pressure to bypass criteria should also be challenged and escalated.",
      },
      {
        id: "M03-C",
        text: "Adjust the qualitative score slightly because relationship history has practical value.",
        points: 3,
        feedback: "Risky",
        quality: "Risky answer",
        explanation:
          "Changing scores without approved criteria creates bias and weakens procurement integrity.",
      },
      {
        id: "M03-D",
        text: "Delete the draft scoring sheet and prepare a new one that supports the preferred vendor.",
        points: 0,
        feedback: "Wrong",
        quality: "Wrong answer",
        explanation:
          "Manipulating evaluation records is misconduct and may indicate procurement fraud.",
      },
    ],
  },
  {
    id: "M04",
    theme: "False Claim or Payment Verification",
    subScore: "Policy Awareness",
    location: "Payment Verification Desk",
    question:
      "A contractor submits a 100% completion claim, but site records and photos show the work is only around 70% complete. Finance asks whether payment can proceed to avoid delay. What should you do?",
    options: [
      {
        id: "M04-A",
        text: "Hold the payment pending verification, request supporting evidence, and document the discrepancy.",
        points: 10,
        feedback: "Correct",
        quality: "Best answer",
        explanation:
          "Payment verification must be evidence-based before the organisation releases funds.",
      },
      {
        id: "M04-B",
        text: "Approve only the verified portion if the contract and approval process allow partial payment.",
        points: 6,
        feedback: "Correct",
        quality: "Acceptable answer",
        explanation:
          "Partial payment can be appropriate when supported by contract terms and verified completion records.",
      },
      {
        id: "M04-C",
        text: "Approve full payment because the contractor promises to finish the balance next week.",
        points: 3,
        feedback: "Risky",
        quality: "Risky answer",
        explanation:
          "A promise is not a control. Payment should match verified deliverables.",
      },
      {
        id: "M04-D",
        text: "Ask the site team to amend the records so the claim file looks complete.",
        points: 0,
        feedback: "Wrong",
        quality: "Wrong answer",
        explanation:
          "Changing records to support a false claim is a serious breach of integrity and financial control.",
      },
    ],
  },
  {
    id: "M05",
    theme: "Whistleblowing",
    subScore: "Escalation Courage",
    location: "Whistleblowing Channel",
    question:
      "A colleague tells you they suspect bid prices were leaked, but they fear retaliation if they report it. They have emails and meeting notes. What advice should you give?",
    options: [
      {
        id: "M05-A",
        text: "Encourage them to use the approved Whistleblowing channel, keep facts clear, and preserve evidence.",
        points: 10,
        feedback: "Correct",
        quality: "Best answer",
        explanation:
          "Protected channels help the organisation assess concerns while preserving confidentiality and evidence.",
      },
      {
        id: "M05-B",
        text: "Offer to accompany them to Compliance or Integrity so the concern is raised properly.",
        points: 6,
        feedback: "Correct",
        quality: "Acceptable answer",
        explanation:
          "Support helps reduce fear, but the matter should still go through an approved reporting route.",
      },
      {
        id: "M05-C",
        text: "Wait until they obtain absolute proof before reporting anything.",
        points: 3,
        feedback: "Risky",
        quality: "Risky answer",
        explanation:
          "Good-faith reporting can start with reasonable concern. Waiting may allow harm to continue.",
      },
      {
        id: "M05-D",
        text: "Forward the emails to all bidders so everyone knows what happened.",
        points: 0,
        feedback: "Wrong",
        quality: "Wrong answer",
        explanation:
          "Broadcasting allegations can breach confidentiality and damage the investigation process.",
      },
    ],
  },
  {
    id: "M06",
    theme: "Misconduct Reporting",
    subScore: "Escalation Courage",
    location: "Control Monitoring Desk",
    question:
      "You notice a staff member repeatedly splitting invoices just below the approval limit and using the same vendor each time. What should you do?",
    options: [
      {
        id: "M06-A",
        text: "Report the pattern through the proper line manager, Finance control, or Integrity channel with supporting details.",
        points: 10,
        feedback: "Correct",
        quality: "Best answer",
        explanation:
          "Repeated transaction splitting is a red flag that should be reviewed through proper governance channels.",
      },
      {
        id: "M06-B",
        text: "Ask for clarification and keep records, then escalate if the explanation does not match policy.",
        points: 6,
        feedback: "Correct",
        quality: "Acceptable answer",
        explanation:
          "Clarification can be useful, but the pattern should not remain informal if the red flag persists.",
      },
      {
        id: "M06-C",
        text: "Ignore it because the total amount is not very large.",
        points: 3,
        feedback: "Risky",
        quality: "Risky answer",
        explanation:
          "Small control breaches can become normalised and may conceal larger misconduct.",
      },
      {
        id: "M06-D",
        text: "Tell the staff member to use your cost centre next time so the pattern is less visible.",
        points: 0,
        feedback: "Wrong",
        quality: "Wrong answer",
        explanation:
          "Helping to conceal a control breach makes you part of the misconduct risk.",
      },
    ],
  },
  {
    id: "M07",
    theme: "Abuse of Power",
    subScore: "Integrity Judgment",
    location: "Leadership Conduct Room",
    question:
      "A manager asks a project vendor to do minor renovation work at the manager's private home, saying it will help the vendor maintain a good relationship with the organisation. What is the right response?",
    options: [
      {
        id: "M07-A",
        text: "Treat it as abuse of power and a potential improper advantage, then escalate through Integrity or Compliance.",
        points: 10,
        feedback: "Correct",
        quality: "Best answer",
        explanation:
          "Using position to obtain private benefit from a vendor is a serious integrity red flag.",
      },
      {
        id: "M07-B",
        text: "Advise the manager not to proceed and record that guidance with an appropriate superior.",
        points: 6,
        feedback: "Correct",
        quality: "Acceptable answer",
        explanation:
          "Stopping the conduct is helpful, but the risk may require independent review because a vendor is involved.",
      },
      {
        id: "M07-C",
        text: "Allow it if the manager pays market price directly to the vendor.",
        points: 3,
        feedback: "Risky",
        quality: "Risky answer",
        explanation:
          "Even paid private work can create coercion or perceived influence when a vendor depends on the organisation.",
      },
      {
        id: "M07-D",
        text: "Tell the vendor to absorb the cost because future projects may be awarded.",
        points: 0,
        feedback: "Wrong",
        quality: "Wrong answer",
        explanation:
          "This is coercive and could amount to bribery, extortion, or abuse of authority.",
      },
    ],
  },
  {
    id: "M08",
    theme: "Site Verification",
    subScore: "Policy Awareness",
    location: "Project Site Verification",
    question:
      "You are asked to sign a site verification checklist remotely for completed works you have not inspected. The project team says management needs the file closed today. What should you do?",
    options: [
      {
        id: "M08-A",
        text: "Refuse to certify unverified work, arrange proper inspection, and escalate the deadline pressure if needed.",
        points: 10,
        feedback: "Correct",
        quality: "Best answer",
        explanation:
          "Certification must be based on actual verification. Deadline pressure does not justify false confirmation.",
      },
      {
        id: "M08-B",
        text: "State clearly that you can only sign after receiving approved inspection evidence from an authorised verifier.",
        points: 6,
        feedback: "Correct",
        quality: "Acceptable answer",
        explanation:
          "Evidence from an authorised verifier may support the process, but blind certification remains unacceptable.",
      },
      {
        id: "M08-C",
        text: "Sign first and inspect later because the work is probably complete.",
        points: 3,
        feedback: "Risky",
        quality: "Risky answer",
        explanation:
          "Backfilling verification exposes the organisation to false claim, safety, and audit risks.",
      },
      {
        id: "M08-D",
        text: "Use last month's photos and change the checklist date to today.",
        points: 0,
        feedback: "Wrong",
        quality: "Wrong answer",
        explanation:
          "Reusing outdated evidence and changing dates falsifies records.",
      },
    ],
  },
  {
    id: "M09",
    theme: "Confidential Information Leakage",
    subScore: "Conflict Radar",
    location: "Information Security Desk",
    question:
      "A former colleague who now works for a bidder asks you on WhatsApp for the internal budget range and evaluation emphasis for an upcoming tender. What is your decision?",
    options: [
      {
        id: "M09-A",
        text: "Decline to share non-public information and remind them that all bidders must use official procurement channels.",
        points: 10,
        feedback: "Correct",
        quality: "Best answer",
        explanation:
          "Confidential tender information must be protected to preserve fairness and due diligence.",
      },
      {
        id: "M09-B",
        text: "Tell Procurement that an information request was made and ask whether a general clarification should be issued to all bidders.",
        points: 6,
        feedback: "Correct",
        quality: "Acceptable answer",
        explanation:
          "Escalating the request helps ensure any approved information is shared equally.",
      },
      {
        id: "M09-C",
        text: "Share only broad hints because you are not sending the actual tender document.",
        points: 3,
        feedback: "Risky",
        quality: "Risky answer",
        explanation:
          "Hints can still give one bidder an unfair advantage and create leakage risk.",
      },
      {
        id: "M09-D",
        text: "Send screenshots and ask them to delete the messages after reading.",
        points: 0,
        feedback: "Wrong",
        quality: "Wrong answer",
        explanation:
          "This intentionally leaks confidential procurement information and undermines competition.",
      },
    ],
  },
  {
    id: "M10",
    theme: "Pressure from Superior",
    subScore: "Escalation Courage",
    location: "Executive Pressure Scenario",
    question:
      "Your superior asks you to backdate a conflict declaration and payment approval so the audit file appears complete before an ABMS review. How should you respond?",
    options: [
      {
        id: "M10-A",
        text: "Decline to falsify records, document the request, and seek guidance from Integrity, Compliance, or an appropriate higher authority.",
        points: 10,
        feedback: "Correct",
        quality: "Best answer",
        explanation:
          "Accurate records are core to ABMS. Senior pressure does not justify falsification.",
      },
      {
        id: "M10-B",
        text: "Ask to submit a current-date declaration with a note explaining why it is late.",
        points: 6,
        feedback: "Correct",
        quality: "Acceptable answer",
        explanation:
          "A transparent late record is better than a false one, but the pressure to backdate should still be escalated.",
      },
      {
        id: "M10-C",
        text: "Backdate only the declaration, not the payment approval, because the review deadline is urgent.",
        points: 3,
        feedback: "Risky",
        quality: "Risky answer",
        explanation:
          "Partial falsification is still falsification and can mislead reviewers.",
      },
      {
        id: "M10-D",
        text: "Backdate both records because refusing a superior may affect your performance rating.",
        points: 0,
        feedback: "Wrong",
        quality: "Wrong answer",
        explanation:
          "Fear of consequences does not justify creating false documents.",
      },
    ],
  },
];

export const getMissionQuestions = () => missionQuestions;
