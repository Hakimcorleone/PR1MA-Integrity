export const subScoreLabels = [
  "Integrity Judgment",
  "Conflict Radar",
  "Escalation Courage",
  "Policy Awareness",
];

const optionMeta = {
  10: { feedback: "Correct", quality: "Best answer" },
  6: { feedback: "Correct", quality: "Acceptable answer" },
  3: { feedback: "Risky", quality: "Risky answer" },
  0: { feedback: "Wrong", quality: "Wrong answer" },
};

const option = (id, points, text, explanation) => ({
  id,
  points,
  text,
  explanation,
  ...optionMeta[points],
});

export const missionQuestions = [
  {
    id: "M01",
    theme: "Gift and Hospitality from Vendors",
    subScore: "Conflict Radar",
    location: "Vendor Engagement Desk",
    question:
      "A vendor involved in an active procurement exercise sends you a premium festive hamper and invites you to lunch before the evaluation meeting. What is your decision?",
    options: [
      option(
        "M01-A",
        10,
        "Politely decline the benefit, record the offer, and inform the Integrity or Procurement secretariat.",
        "This protects independence and manages the actual or perceived conflict before evaluation starts.",
      ),
      option(
        "M01-B",
        6,
        "Ask whether the hamper can be redirected to the company gift register while you skip the lunch.",
        "Declaring and redirecting the gift is better than accepting it, but the offer should still be escalated because timing matters.",
      ),
      option(
        "M01-C",
        3,
        "Accept the hamper only because it is a festive custom and does not affect your judgement.",
        "Customary gifts can still create a red flag when a vendor has pending business with the organisation.",
      ),
      option(
        "M01-D",
        0,
        "Ask the vendor to send the hamper to your home address so it stays private.",
        "Hiding a benefit from a vendor creates serious integrity and ABMS control concerns.",
      ),
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
      option(
        "M02-A",
        3,
        "Stay in the committee because you believe you can be objective.",
        "Integrity risk includes perceived conflict, not only proven bias.",
      ),
      option(
        "M02-B",
        10,
        "Declare the relationship immediately and let the committee decide whether you must be recused.",
        "Transparent declaration allows the organisation to manage the conflict before any decision is influenced.",
      ),
      option(
        "M02-C",
        6,
        "Continue only with administrative tasks while waiting for written guidance from the secretariat.",
        "Pausing decision-making helps, but the relationship still needs a formal declaration and management decision.",
      ),
      option(
        "M02-D",
        0,
        "Tell your cousin to submit a better commercial offer so the company wins fairly.",
        "Giving an interested party special access undermines fair competition and procurement governance.",
      ),
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
      option(
        "M03-A",
        10,
        "Keep to the approved criteria, document the concern, and escalate any attempt to override the evaluation.",
        "Procurement evaluation must follow approved criteria and be supported by a clear audit trail.",
      ),
      option(
        "M03-B",
        3,
        "Adjust the qualitative score slightly because relationship history has practical value.",
        "Changing scores without approved criteria creates bias and weakens procurement integrity.",
      ),
      option(
        "M03-C",
        6,
        "Ask the committee chair to record a formal justification before any recommendation changes.",
        "Documentation is important, but pressure to bypass criteria should also be challenged and escalated.",
      ),
      option(
        "M03-D",
        0,
        "Delete the draft scoring sheet and prepare a new one that supports the preferred vendor.",
        "Manipulating evaluation records is misconduct and may indicate procurement fraud.",
      ),
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
      option(
        "M04-A",
        3,
        "Approve full payment because the contractor promises to finish the balance next week.",
        "A promise is not a control. Payment should match verified deliverables.",
      ),
      option(
        "M04-B",
        10,
        "Hold the payment pending verification, request supporting evidence, and document the discrepancy.",
        "Payment verification must be evidence-based before the organisation releases funds.",
      ),
      option(
        "M04-C",
        6,
        "Approve only the verified portion if the contract and approval process allow partial payment.",
        "Partial payment can be appropriate when supported by contract terms and verified completion records.",
      ),
      option(
        "M04-D",
        0,
        "Ask the site team to amend the records so the claim file looks complete.",
        "Changing records to support a false claim is a serious breach of integrity and financial control.",
      ),
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
      option(
        "M05-A",
        10,
        "Encourage them to use the approved Whistleblowing channel, keep facts clear, and preserve evidence.",
        "Protected channels help the organisation assess concerns while preserving confidentiality and evidence.",
      ),
      option(
        "M05-B",
        6,
        "Offer to accompany them to Compliance or Integrity so the concern is raised properly.",
        "Support helps reduce fear, but the matter should still go through an approved reporting route.",
      ),
      option(
        "M05-C",
        3,
        "Wait until they obtain absolute proof before reporting anything.",
        "Good-faith reporting can start with reasonable concern. Waiting may allow harm to continue.",
      ),
      option(
        "M05-D",
        0,
        "Forward the emails to all bidders so everyone knows what happened.",
        "Broadcasting allegations can breach confidentiality and damage the investigation process.",
      ),
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
      option(
        "M06-A",
        3,
        "Ignore it because the total amount is not very large.",
        "Small control breaches can become normalised and may conceal larger misconduct.",
      ),
      option(
        "M06-B",
        6,
        "Ask for clarification and keep records, then escalate if the explanation does not match policy.",
        "Clarification can be useful, but the pattern should not remain informal if the red flag persists.",
      ),
      option(
        "M06-C",
        10,
        "Report the pattern through the proper line manager, Finance control, or Integrity channel with supporting details.",
        "Repeated transaction splitting is a red flag that should be reviewed through proper governance channels.",
      ),
      option(
        "M06-D",
        0,
        "Tell the staff member to use your cost centre next time so the pattern is less visible.",
        "Helping to conceal a control breach makes you part of the misconduct risk.",
      ),
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
      option(
        "M07-A",
        10,
        "Treat it as abuse of power and a potential improper advantage, then escalate through Integrity or Compliance.",
        "Using position to obtain private benefit from a vendor is a serious integrity red flag.",
      ),
      option(
        "M07-B",
        3,
        "Allow it if the manager pays market price directly to the vendor.",
        "Even paid private work can create coercion or perceived influence when a vendor depends on the organisation.",
      ),
      option(
        "M07-C",
        6,
        "Advise the manager not to proceed and record that guidance with an appropriate superior.",
        "Stopping the conduct is helpful, but the risk may require independent review because a vendor is involved.",
      ),
      option(
        "M07-D",
        0,
        "Tell the vendor to absorb the cost because future projects may be awarded.",
        "This is coercive and could amount to bribery, extortion, or abuse of authority.",
      ),
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
      option(
        "M08-A",
        10,
        "Refuse to certify unverified work, arrange proper inspection, and escalate the deadline pressure if needed.",
        "Certification must be based on actual verification. Deadline pressure does not justify false confirmation.",
      ),
      option(
        "M08-B",
        6,
        "State clearly that you can only sign after receiving approved inspection evidence from an authorised verifier.",
        "Evidence from an authorised verifier may support the process, but blind certification remains unacceptable.",
      ),
      option(
        "M08-C",
        3,
        "Sign first and inspect later because the work is probably complete.",
        "Backfilling verification exposes the organisation to false claim, safety, and audit risks.",
      ),
      option(
        "M08-D",
        0,
        "Use last month's photos and change the checklist date to today.",
        "Reusing outdated evidence and changing dates falsifies records.",
      ),
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
      option(
        "M09-A",
        3,
        "Share only broad hints because you are not sending the actual tender document.",
        "Hints can still give one bidder an unfair advantage and create leakage risk.",
      ),
      option(
        "M09-B",
        10,
        "Decline to share non-public information and remind them that all bidders must use official procurement channels.",
        "Confidential tender information must be protected to preserve fairness and due diligence.",
      ),
      option(
        "M09-C",
        6,
        "Tell Procurement that an information request was made and ask whether a general clarification should be issued to all bidders.",
        "Escalating the request helps ensure any approved information is shared equally.",
      ),
      option(
        "M09-D",
        0,
        "Send screenshots and ask them to delete the messages after reading.",
        "This intentionally leaks confidential procurement information and undermines competition.",
      ),
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
      option(
        "M10-A",
        10,
        "Decline to falsify records, document the request, and seek guidance from Integrity, Compliance, or an appropriate higher authority.",
        "Accurate records are core to ABMS. Senior pressure does not justify falsification.",
      ),
      option(
        "M10-B",
        6,
        "Ask to submit a current-date declaration with a note explaining why it is late.",
        "A transparent late record is better than a false one, but the pressure to backdate should still be escalated.",
      ),
      option(
        "M10-C",
        3,
        "Backdate only the declaration, not the payment approval, because the review deadline is urgent.",
        "Partial falsification is still falsification and can mislead reviewers.",
      ),
      option(
        "M10-D",
        0,
        "Backdate both records because refusing a superior may affect your performance rating.",
        "Fear of consequences does not justify creating false documents.",
      ),
    ],
  },
  {
    id: "M11",
    theme: "Third-Party Due Diligence",
    subScore: "Policy Awareness",
    location: "Vendor Due Diligence Desk",
    question:
      "A proposed agent asks for a high success fee, refuses to describe services clearly, and says they have close contacts in an approving authority. What should happen next?",
    options: [
      option(
        "M11-A",
        6,
        "Pause the engagement and ask Procurement to obtain a clearer scope of services.",
        "Pausing is useful, but the red flags require enhanced due diligence and escalation, not only a better scope.",
      ),
      option(
        "M11-B",
        0,
        "Approve the agent because success fees are common in the market.",
        "A high fee with vague services and influence claims is a classic bribery red flag.",
      ),
      option(
        "M11-C",
        10,
        "Perform enhanced due diligence, document the red flags, and escalate before any appointment.",
        "High-risk third parties must be screened before engagement because the organisation can be exposed through agents.",
      ),
      option(
        "M11-D",
        3,
        "Proceed first and complete due diligence after the first invoice.",
        "Due diligence after engagement is too late when bribery risk indicators are already visible.",
      ),
    ],
  },
  {
    id: "M12",
    theme: "Sponsorship and Donations",
    subScore: "Conflict Radar",
    location: "Corporate Contribution Review",
    question:
      "A public official hints that project approval will move faster if the company sponsors a private association dinner. What is the right call?",
    options: [
      option(
        "M12-A",
        10,
        "Treat the request as a potential improper advantage, decline any linked sponsorship, and escalate for review.",
        "A contribution linked to approval may be bribery even if it is described as sponsorship.",
      ),
      option(
        "M12-B",
        3,
        "Sponsor a smaller amount so the organisation appears cooperative without overspending.",
        "Reducing the amount does not remove the improper link to official approval.",
      ),
      option(
        "M12-C",
        6,
        "Ask for the request in writing and refer it to Legal, Integrity, or Compliance before responding.",
        "Formal review is appropriate, but the team should also avoid creating any impression of exchange for approval.",
      ),
      option(
        "M12-D",
        0,
        "Make the sponsorship through a vendor so it does not appear in company records.",
        "Using a third party to hide a payment creates serious bribery and records risks.",
      ),
    ],
  },
  {
    id: "M13",
    theme: "Recruitment Nepotism",
    subScore: "Integrity Judgment",
    location: "HR Hiring Panel",
    question:
      "A department head asks HR to shortlist their niece for a role and says the interview score can be adjusted later. What should HR do?",
    options: [
      option(
        "M13-A",
        3,
        "Shortlist the candidate if they meet the minimum academic requirement.",
        "Meeting minimum criteria does not justify special treatment or score manipulation.",
      ),
      option(
        "M13-B",
        10,
        "Require conflict declaration, keep the process merit-based, and prevent the department head from influencing scoring.",
        "Recruitment decisions must be fair, documented, and free from undeclared personal influence.",
      ),
      option(
        "M13-C",
        6,
        "Allow the application but assign independent reviewers and keep the department head out of the panel.",
        "Independent review helps manage the risk, but a conflict declaration should still be recorded.",
      ),
      option(
        "M13-D",
        0,
        "Adjust the score because senior leadership has already indicated preference.",
        "Manipulating recruitment records is misconduct and damages trust in hiring controls.",
      ),
    ],
  },
  {
    id: "M14",
    theme: "HR Confidentiality",
    subScore: "Policy Awareness",
    location: "People Data Room",
    question:
      "A manager asks HR to share an employee's medical and disciplinary records through personal email because they are travelling. What should happen?",
    options: [
      option(
        "M14-A",
        10,
        "Decline personal email sharing and use approved access controls with a legitimate business need.",
        "Sensitive employee data must be protected and shared only through approved channels.",
      ),
      option(
        "M14-B",
        6,
        "Share only the minimum necessary information through an approved secure channel.",
        "Data minimisation and secure channels reduce confidentiality and privacy risk.",
      ),
      option(
        "M14-C",
        3,
        "Send the files if the manager promises to delete them after reading.",
        "Promises do not replace approved data protection controls.",
      ),
      option(
        "M14-D",
        0,
        "Forward the full file to the manager's personal email for convenience.",
        "This exposes sensitive information and breaches confidentiality expectations.",
      ),
    ],
  },
  {
    id: "M15",
    theme: "Customer Service Favouritism",
    subScore: "Conflict Radar",
    location: "Customer Service Counter",
    question:
      "A friend asks you to move their application ahead of the normal queue because they urgently need approval. What is the right response?",
    options: [
      option(
        "M15-A",
        6,
        "Explain the official process and direct them to the approved urgent-case channel if one exists.",
        "Using an approved channel keeps the decision fair and traceable.",
      ),
      option(
        "M15-B",
        10,
        "Decline personal intervention, declare the relationship if involved, and ensure the application follows normal controls.",
        "Personal relationships should not influence queue priority or service decisions.",
      ),
      option(
        "M15-C",
        3,
        "Move the file forward just once because it does not involve money.",
        "Favouritism can still be misconduct even without direct payment.",
      ),
      option(
        "M15-D",
        0,
        "Ask for a personal token of appreciation before helping.",
        "Requesting a benefit for service treatment is a corruption red flag.",
      ),
    ],
  },
  {
    id: "M16",
    theme: "Sales Allocation Pressure",
    subScore: "Integrity Judgment",
    location: "Sales Allocation Desk",
    question:
      "A customer offers a cash token to secure priority allocation of a limited unit. The allocation policy requires transparent criteria. What should you do?",
    options: [
      option(
        "M16-A",
        10,
        "Reject the token, record the offer, and follow the approved allocation criteria.",
        "Allocation decisions must be transparent and free from improper benefits.",
      ),
      option(
        "M16-B",
        3,
        "Accept the token but still apply the criteria fairly.",
        "Accepting a personal benefit creates bias and perception risk even if the decision appears fair.",
      ),
      option(
        "M16-C",
        6,
        "Decline the token and ask a supervisor to review the file if pressure continues.",
        "Escalation is appropriate when pressure continues, but the offer should also be recorded.",
      ),
      option(
        "M16-D",
        0,
        "Give the customer priority because they are willing to pay extra unofficially.",
        "Unofficial payment for priority treatment is bribery.",
      ),
    ],
  },
  {
    id: "M17",
    theme: "Duplicate Invoice Review",
    subScore: "Policy Awareness",
    location: "Finance Review Desk",
    question:
      "Finance detects two invoices with similar numbers, amounts, and descriptions from the same vendor. The vendor says one is a revised copy and asks for urgent payment. What is the safest action?",
    options: [
      option(
        "M17-A",
        10,
        "Hold payment, verify against purchase order and goods received records, and document the duplicate-invoice review.",
        "Duplicate invoices can cause financial loss and must be resolved before payment.",
      ),
      option(
        "M17-B",
        6,
        "Pay only after the vendor formally cancels the duplicate and the internal records match.",
        "Formal cancellation and matching records reduce risk, but the review should be fully documented.",
      ),
      option(
        "M17-C",
        3,
        "Pay the newer invoice because it probably replaces the old one.",
        "Assumption is not enough for payment verification.",
      ),
      option(
        "M17-D",
        0,
        "Pay both invoices and recover later if there is an issue.",
        "Paying without verification bypasses financial controls and may be unrecoverable.",
      ),
    ],
  },
  {
    id: "M18",
    theme: "Unequal Tender Clarification",
    subScore: "Conflict Radar",
    location: "Tender Clarification Desk",
    question:
      "One bidder calls you privately asking how to improve their technical proposal before closing date. What should you do?",
    options: [
      option(
        "M18-A",
        6,
        "Tell them to submit questions through the official clarification channel.",
        "This protects equal access, but the attempted private contact should also be recorded if relevant.",
      ),
      option(
        "M18-B",
        3,
        "Give general tips because they are not confidential documents.",
        "General tips can still create unfair advantage.",
      ),
      option(
        "M18-C",
        10,
        "Refuse private guidance, document the contact, and ensure any approved clarification is shared with all bidders.",
        "All bidders must receive the same approved information through transparent channels.",
      ),
      option(
        "M18-D",
        0,
        "Offer detailed guidance in exchange for future consideration.",
        "Trading tender assistance for benefit is corrupt conduct.",
      ),
    ],
  },
  {
    id: "M19",
    theme: "Variation Order Integrity",
    subScore: "Integrity Judgment",
    location: "Project Variation Review",
    question:
      "A project team proposes a variation order with vague scope, no supporting measurement, and a price close to the approval threshold. What should happen?",
    options: [
      option(
        "M19-A",
        10,
        "Request complete justification, measurement evidence, independent review, and proper approval before proceeding.",
        "Variation orders must be justified, evidenced, and approved to prevent inflated or unnecessary cost.",
      ),
      option(
        "M19-B",
        6,
        "Return the submission for clearer scope and cost breakdown before committee review.",
        "Better documentation is needed, and high-risk patterns may still require integrity attention.",
      ),
      option(
        "M19-C",
        3,
        "Approve because staying below the threshold means the risk is controlled.",
        "Staying just below a threshold can be a red flag for control avoidance.",
      ),
      option(
        "M19-D",
        0,
        "Split the variation into two smaller packages to speed approval.",
        "Splitting to avoid controls is misconduct and undermines governance.",
      ),
    ],
  },
  {
    id: "M20",
    theme: "Abuse of Company Assets",
    subScore: "Policy Awareness",
    location: "Asset Control Room",
    question:
      "A supervisor uses a company vehicle and fuel card for weekend personal errands and asks the driver not to record the trips. What is the right action?",
    options: [
      option(
        "M20-A",
        3,
        "Ignore it because a supervisor has discretion over vehicle use.",
        "Authority does not allow personal misuse or concealment of company assets.",
      ),
      option(
        "M20-B",
        10,
        "Record the facts and report the misuse through the appropriate asset, HR, or Integrity channel.",
        "Company assets must be used for approved business purposes and records must be accurate.",
      ),
      option(
        "M20-C",
        6,
        "Advise the supervisor to reimburse the cost and regularise the record.",
        "Reimbursement helps but does not fully address the request to hide records.",
      ),
      option(
        "M20-D",
        0,
        "Help remove the trips from the logbook.",
        "Concealing asset misuse makes the control breach worse.",
      ),
    ],
  },
  {
    id: "M21",
    theme: "Vendor Bank Account Change",
    subScore: "Policy Awareness",
    location: "Vendor Master Data Desk",
    question:
      "A vendor emails new bank account details from a slightly different domain and says payment must be made today. What should you do?",
    options: [
      option(
        "M21-A",
        10,
        "Stop payment until the bank change is independently verified through approved vendor master controls.",
        "Urgent bank changes are fraud and payment diversion red flags.",
      ),
      option(
        "M21-B",
        6,
        "Call the vendor using the existing verified contact record before any update is made.",
        "Independent verification is needed before changing payment details.",
      ),
      option(
        "M21-C",
        3,
        "Process the change because the invoice amount and vendor name match.",
        "Matching invoice details do not prove the bank change is legitimate.",
      ),
      option(
        "M21-D",
        0,
        "Pay to the new account and ask questions after the deadline.",
        "Payment before verification can result in unrecoverable loss.",
      ),
    ],
  },
  {
    id: "M22",
    theme: "Lavish Hospitality",
    subScore: "Conflict Radar",
    location: "Hospitality Review Desk",
    question:
      "A supplier invites your evaluation team to an overseas golf weekend after tender submission. What is the correct response?",
    options: [
      option(
        "M22-A",
        10,
        "Decline the invitation and record the offer according to policy.",
        "Lavish hospitality during a tender creates a serious perception of influence.",
      ),
      option(
        "M22-B",
        3,
        "Attend if the team pays for flights but accepts accommodation.",
        "Partial payment does not remove the conflict and perception risk.",
      ),
      option(
        "M22-C",
        6,
        "Ask Integrity or Compliance for guidance before responding and do not attend pending advice.",
        "Seeking guidance is good, and the likely outcome should still be decline and record.",
      ),
      option(
        "M22-D",
        0,
        "Send only junior staff so evaluators are not directly involved.",
        "Using substitutes to accept a vendor benefit still creates improper influence risk.",
      ),
    ],
  },
  {
    id: "M23",
    theme: "Late Conflict Declaration",
    subScore: "Policy Awareness",
    location: "Declaration Register",
    question:
      "You realise you forgot to declare a small shareholding in a supplier before a committee meeting last month. The supplier did not win. What should you do now?",
    options: [
      option(
        "M23-A",
        6,
        "Submit a current-date declaration and explain that it was late.",
        "Transparent late disclosure is better than silence, but the impact should also be assessed.",
      ),
      option(
        "M23-B",
        10,
        "Declare it immediately, state the timing honestly, and let the organisation assess whether any remediation is needed.",
        "Late conflicts should still be recorded accurately and assessed.",
      ),
      option(
        "M23-C",
        3,
        "Do nothing because the supplier did not win.",
        "The outcome does not remove the duty to declare and maintain accurate records.",
      ),
      option(
        "M23-D",
        0,
        "Backdate the declaration so the register appears complete.",
        "Backdating creates a false record and weakens ABMS evidence.",
      ),
    ],
  },
  {
    id: "M24",
    theme: "Investigation Confidentiality",
    subScore: "Integrity Judgment",
    location: "Investigation Room",
    question:
      "You are asked to assist an internal investigation. A close colleague named in the complaint asks what evidence has been collected. What should you do?",
    options: [
      option(
        "M24-A",
        10,
        "Decline to discuss the case, preserve confidentiality, and declare the relationship to the investigation lead.",
        "Investigations must be independent, confidential, and protected from interference.",
      ),
      option(
        "M24-B",
        6,
        "Tell the investigation lead about the contact and ask whether you should be removed from the case.",
        "Escalating the contact is appropriate, but no case details should be shared.",
      ),
      option(
        "M24-C",
        3,
        "Share only general information so your colleague can prepare.",
        "General information can still compromise evidence and independence.",
      ),
      option(
        "M24-D",
        0,
        "Warn your colleague about the strongest evidence.",
        "Warning a subject can obstruct the investigation and breach confidentiality.",
      ),
    ],
  },
  {
    id: "M25",
    theme: "Retaliation Risk",
    subScore: "Escalation Courage",
    location: "Speak-Up Protection Desk",
    question:
      "After a staff member reports suspected misconduct, their supervisor suddenly removes them from meetings and gives them poor shifts. What should you do if you notice this pattern?",
    options: [
      option(
        "M25-A",
        6,
        "Check whether there is a legitimate operational reason and document what you observe.",
        "Fact-checking matters, but possible retaliation should not remain informal.",
      ),
      option(
        "M25-B",
        10,
        "Escalate the potential retaliation through HR, Integrity, or the whistleblowing protection process.",
        "Retaliation risk must be addressed quickly to protect speak-up culture.",
      ),
      option(
        "M25-C",
        3,
        "Tell the reporter to stay quiet until the investigation ends.",
        "Silence can allow retaliation to continue and discourage reporting.",
      ),
      option(
        "M25-D",
        0,
        "Warn others not to report because management reacts badly.",
        "Discouraging reporting damages integrity culture and may enable misconduct.",
      ),
    ],
  },
  {
    id: "M26",
    theme: "Personal Email and Tender Files",
    subScore: "Policy Awareness",
    location: "Document Control Desk",
    question:
      "A committee member asks you to send tender evaluation files to their personal email because their office laptop is slow. What is the right response?",
    options: [
      option(
        "M26-A",
        10,
        "Decline personal email sharing and provide access through approved secure systems.",
        "Tender documents are sensitive and must remain within approved information controls.",
      ),
      option(
        "M26-B",
        6,
        "Ask IT or the secretariat for an approved secure workaround.",
        "A controlled workaround supports business needs without bypassing confidentiality.",
      ),
      option(
        "M26-C",
        3,
        "Send only the summary sheet to personal email.",
        "Even summaries may contain sensitive evaluation information.",
      ),
      option(
        "M26-D",
        0,
        "Send the full file and mark the email confidential.",
        "A label does not make personal email an approved secure channel.",
      ),
    ],
  },
  {
    id: "M27",
    theme: "ABMS Audit Evidence",
    subScore: "Policy Awareness",
    location: "ABMS Evidence Room",
    question:
      "During an ABMS review, a team cannot show evidence that high-risk vendors were screened before onboarding. What should happen?",
    options: [
      option(
        "M27-A",
        6,
        "Complete the missing due diligence now and record the date honestly.",
        "Completing checks helps, but the original control gap also needs corrective action.",
      ),
      option(
        "M27-B",
        10,
        "Record the gap, assess the risk, complete corrective action, and strengthen monitoring.",
        "ABMS relies on documented evidence, risk assessment, correction, and continual improvement.",
      ),
      option(
        "M27-C",
        3,
        "Assume screening was done because the vendors were approved.",
        "Approval without evidence is not enough for ABMS assurance.",
      ),
      option(
        "M27-D",
        0,
        "Create screening records with old dates so the file looks complete.",
        "Creating false dated evidence is a serious integrity breach.",
      ),
    ],
  },
  {
    id: "M28",
    theme: "Facilitation Payment",
    subScore: "Escalation Courage",
    location: "Permit Escalation Desk",
    question:
      "A consultant says a small unofficial payment will speed up a permit review and that everyone does it. What is the correct action?",
    options: [
      option(
        "M28-A",
        10,
        "Refuse the payment, document the request, and escalate through the proper channel.",
        "Improper payments must not be made directly or indirectly through third parties.",
      ),
      option(
        "M28-B",
        3,
        "Ask for a receipt so the payment can be recorded transparently.",
        "A receipt does not make an unofficial influence payment acceptable.",
      ),
      option(
        "M28-C",
        6,
        "Pause the consultant's instruction and seek guidance from Legal, Integrity, or Compliance.",
        "Seeking guidance is correct, and the request should be documented and refused.",
      ),
      option(
        "M28-D",
        0,
        "Let the consultant handle it because they are external.",
        "The organisation can still be exposed by third-party actions taken on its behalf.",
      ),
    ],
  },
  {
    id: "M29",
    theme: "Blacklisted Vendor Pressure",
    subScore: "Integrity Judgment",
    location: "Vendor Governance Panel",
    question:
      "A project sponsor asks you to re-engage a vendor that was suspended for integrity concerns because they can deliver fastest. What should you do?",
    options: [
      option(
        "M29-A",
        6,
        "Check whether the suspension has expired and whether re-engagement is allowed under policy.",
        "Policy checks are necessary, but integrity concerns may require formal clearance.",
      ),
      option(
        "M29-B",
        10,
        "Follow vendor governance requirements, require formal clearance, and document any exception request.",
        "Suspended vendors should not be bypassed through informal pressure or urgency.",
      ),
      option(
        "M29-C",
        3,
        "Use the vendor for a small urgent job while the paperwork catches up.",
        "Small jobs can still breach suspension controls and expose the organisation.",
      ),
      option(
        "M29-D",
        0,
        "Create a new vendor code under a related company name.",
        "Avoiding a suspension through another entity is deliberate control evasion.",
      ),
    ],
  },
  {
    id: "M30",
    theme: "Social Media Misconduct Disclosure",
    subScore: "Escalation Courage",
    location: "Reputation Response Desk",
    question:
      "You see credible allegations online about misconduct involving a project team, including documents that may be confidential. What is the best first response?",
    options: [
      option(
        "M30-A",
        3,
        "Reply publicly to defend the organisation and challenge the person who posted it.",
        "Public arguments can worsen reputation risk and compromise confidentiality.",
      ),
      option(
        "M30-B",
        10,
        "Capture the information, avoid public engagement, and escalate to Integrity, Legal, and Communications for coordinated handling.",
        "Credible allegations need protected review and coordinated response.",
      ),
      option(
        "M30-C",
        6,
        "Notify your line manager and preserve the link without sharing it widely.",
        "Preserving information is useful, but specialist functions should be involved quickly.",
      ),
      option(
        "M30-D",
        0,
        "Share the post in group chats so everyone can investigate informally.",
        "Informal sharing can leak confidential data and damage the review process.",
      ),
    ],
  },
];

export const getMissionQuestions = () => missionQuestions;
