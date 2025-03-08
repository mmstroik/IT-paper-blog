# The Dual Nature of AI in Cybersecurity

#### Milo Stroik

#### February 23, 2025

## Introduction

Artificial intelligence (AI) has become a double-edged sword in cybersecurity. On one hand, AI (including large language models, or LLMs) offers powerful tools to defend systems – from identifying threats in vast data streams to automating rapid incident responses. On the other hand, these same technologies introduce novel security challenges and can be weaponized by adversaries. The rapid adoption of AI brings unique benefits and new risks that must be managed, and law enforcement also warns that cybercriminals are exploiting AI to increase the speed, scale, and automation of attacks (FBI San Francisco, 2024).

The recent rise of AI and LLMs represents a transformative time in cybersecurity, presenting both new opportunities and challenges. The rapid advancement of these technologies has created a complex landscape where security professionals must balance the potential benefits against emerging threats. The use of AI in security systems has also sparked discussions about appropriate governance structures and implementation strategies for organizations, especially in sensitive sectors like healthcare where data protection is important (Park, 2024). This dual nature of AI in cybersecurity requires careful consideration of technical, ethical, and regulatory frameworks, especially as autonomous AI systems become more sophisticated (Valencia, 2024).

This paper examines AI's dual role in cybersecurity, surveying current defensive applications of AI, emerging risks and attack vectors associated with AI/LLMs, the evolving regulatory and ethical frameworks, impacts on privacy/data protection, and future implications as AI systems become increasingly autonomous, analyzing how organizations can leverage AI's capabilities while implementing appropriate safeguards against its potential misuse.

## Technology Overview

### AI in Cybersecurity: Current Defensive Applications

AI is now highly important to many cybersecurity strategies, enhancing the capability to detect and respond to threats faster and more accurately than traditional methods. The integration of AI into cybersecurity has demonstrated significant potential for improving defensive capabilities. Traditional machine learning approaches to web security often require large, current datasets to be effective. LLMs have an advantage here because they already have embedded knowledge that can be applied to security tasks without the need for extensive new training data (Nana et al., 2024). Key applications of AI in cybersecurity include threat identification, automated incident response, vulnerability analysis, and malware and fraud detection.

#### Threat Detection and Anomaly Identification

AI-driven systems excel at analyzing large volumes of network traffic, logs, and user behavior to detect suspicious patterns in real time (Cloud Security Alliance, 2025). Machine learning (ML) models can establish a baseline of "normal" activity and flag deviations that may indicate intrusions or malicious behavior (Cloud Security Alliance, 2025). For example, ML techniques are used to identify phishing attempts by recognizing subtle patterns in emails or URLs that humans might miss.

Compared to standard rule-based programs, these AI models continuously learn from new data, improving their accuracy and catching threats that would otherwise go unnoticed (Cloud Security Alliance, 2025; et, 2023). Recent research indicates that LLMs can effectively detect web application vulnerabilities, providing advantages over traditional security methods (Nana et al., 2024), and cloud security has particularly benefited from AI models with similar architectures to LLMs such as network intrusion detection (Long et al., 2024).

#### Automated Incident Response

AI enables a shift from manual incident handling to automated, real-time response. AI-powered Security Information and Event Management (SIEM) and Extended Detection and Response (XDR) platforms can automatically trigger containment actions (like isolating an infected host or blocking an IP address) the moment a threat is confirmed (Cloud Security Alliance, 2025).

Such real-time incident response mitigates damage by drastically reducing response times. For instance, an AI-based system might quarantine a malware-infected endpoint or roll back malicious changes as soon as an anomaly is detected, without waiting for human intervention (Cloud Security Alliance, 2025). This level of speed and orchestration helps limit the spread of attacks inside a network.

#### Vulnerability Analysis and Patch Management

AI is used to find and fix security weaknesses more efficiently. Machine learning models can assist in scanning code and system configurations to predict where vulnerabilities are likely to exist, prioritizing them for remediation. The application of LLMs in vulnerability detection represents a significant advancement in cybersecurity tools. These models can analyze code and system configurations more comprehensively than traditional methods (Nana et al., 2024).

AI tools also help in automated patch management – identifying available fixes and even applying patches or configuration changes autonomously (Cloud Security Alliance, 2025). By automating these processes, organizations can shrink the window of exposure between the discovery of a vulnerability and its mitigation. AI's ability to process vulnerability data at scale allows it to sift through thousands of alerts and false positives, highlighting the truly critical issues for security teams (Fortinet, 2023).

The implementation of AI development and security frameworks provides structured approaches to securing AI systems throughout their lifecycle (Darraj et al., 2019), while transformer-based models (the same core architecture of LLMs) have proven particularly effective in cloud security applications (Long et al., 2024).

#### Malware and Fraud Detection

Modern antivirus and anti-malware solutions increasingly incorporate AI and machine learning to recognize new malware strains. Rather than relying solely on known signatures, AI-based detectors learn the behavioral patterns of malware (such as how it interacts with a system or network) and can thus identify novel, previously unseen malicious code (Cloud Security Alliance, 2025; ISC2, 2024).

Similarly, AI models are trained to detect fraud in real-time (for example, flagging anomalous financial transactions or login patterns) far faster than manual review. These AI systems adapt as attackers change their tactics, maintaining effectiveness against evolving threats (Fortinet, 2023).

### Advanced Applications and Future Developments

The evolution of AI technologies suggests increasingly sophisticated security applications, including autonomous security systems capable of real-time threat detection and response, enhanced privacy-preserving AI models, and more robust defenses against AI-powered attacks. AI-driven penetration testing and vulnerability assessment tools like ReaperAI represent significant developments in this space (Valencia, 2024).

We are close to developing security tools that are not just assistive but fully autonomous agents. Unlike today's automated security scripts and programs that have pre-determined rules, "agentic AI" refers to AI that can understand overall goals, make decisions that take context into consideration, and carry out actions with less human input (TechSpective, 2024).

In cybersecurity, this could mean an AI agent that not only detects an intrusion, but also investigates it, determines the best response, and executes that response across the network in real time. Early examples are already emerging – for instance, cloud security teams at AWS are developing autonomous AI systems capable of acting independently within their environments for incident response and remediation (TechSpective, 2024).

The potential here is improved speed and scale of defense. Tasks like isolating affected systems, applying patches, or hunting for hidden threats could be handled in seconds by AI agents that coordinate with each other, rather than hours or days with human-driven workflows. Such agents could potentially start to handle routine incidents end-to-end, freeing humans for oversight and strategic tasks (TechSpective, 2024).

Collectively, these applications demonstrate the defensive power of AI. By automating routine tasks like log analysis and vulnerability scanning, AI frees up human analysts to focus on complex threats (Fortinet, 2023). It also enhances organizations' ability to predict attacks – for example, using predictive analytics on threat intelligence feeds to anticipate an adversary's next move (Cloud Security Alliance, 2025).

## Legal, Ethical, and Social Issues

### Regulatory Frameworks and AI Governance

The rapid integration of AI into cybersecurity has prompted governments and industry bodies to consider new regulations, standards, and ethical guidelines. The global approach to AI regulation varies significantly across regions, with different frameworks emerging to address security and safety concerns. The EU's AI Act is a comprehensive attempt to regulate AI systems, whereas other regions use more context-specific approaches (Park, 2024).

#### Data Protection Laws

General data protection regulations directly impact AI in security, since AI systems often process personal data. The EU's General Data Protection Regulation (GDPR) imposes requirements on fairness, transparency, and lawfulness of data processing. Notably, GDPR's provisions on automated decision-making (Art. 22) require safeguards when significant decisions are made by algorithms. The European Data Protection Board has acknowledged that using AI for purposes like threat detection can be legal under a "legitimate interest" basis, but organizations must meet strict conditions (Sircar, 2024).

#### AI-Specific Regulations

Beyond general privacy law, governments are creating AI-focused regulations. The European Union's AI Act (formally adopted in 2024) is the first comprehensive legal framework for AI. It introduces a risk-based approach, classifying certain AI systems as "high-risk" and subjecting them to stricter obligations. Notably, AI used in security and critical infrastructure could be considered high-risk. The AI Act mandates requirements for high-risk AI systems related to robustness, transparency, and cybersecurity (EU Artificial Intelligence Act, 2024).

Many advocate for a preventative rather than detection-focused approach to AI security regulation that involves cooperation between everyone that is affected (Watney, 2020). Park (2024) notes that regional differences in approaches can create challenges for organizations operating globally, particularly in implementing consistent security standards. This shows the importance of international frameworks that can address AI security risks while allowing for innovation.

### Ethical Considerations

Alongside formal regulations, there is a strong movement to ensure AI in cybersecurity is used ethically. Organizations like ISC2, research institutes, and industry coalitions have published ethical guidelines focusing on issues of bias, transparency, and accountability in AI systems (SecureTrust, 2023).

In security, algorithmic bias is a real concern – if an AI model is trained on skewed data, it might unfairly target or overlook certain groups of users or activities. Ethicists urge diverse training data and regular audits to detect and correct bias (ISC2, 2024b; ISC2, 2024c).

Transparency is another key principle. Stakeholders should be able to understand and trust AI decisions. However, many advanced AI models are "black boxes," which makes explainability difficult (ISC2, 2024). This opaqueness can be problematic if, e.g., an AI falsely flags normal software as malicious, as security teams might struggle to understand the decision.

AI systems raise significant privacy concerns regarding the handling of training data and user interactions. Organizations implementing AI must establish clear protocols like methods for anonymizing information and ensuring models don't reveal sensitive data. The healthcare industry must carefully balance the benefits of AI applications against strict data protection requirements (Park, 2024). The implementation of comprehensive AI cybersecurity frameworks becomes crucial for maintaining privacy while leveraging AI capabilities (Darraj et al., 2019).

Accountability is also an important consideration. When an autonomous security system makes a mistake, organizations must have clear lines of responsibility and means to remedy the situation (ISC2, 2024). Ethical frameworks call for explainable AI, or at least processes to review AI-driven decisions, especially when they significantly impact users.

## Security Aspects and Challenges

### Emerging Security Risks of AI and LLMs

While AI bolsters defense, it simultaneously introduces new vulnerabilities and attack techniques. As AI and LLM systems proliferate, attackers are finding ways to exploit or subvert them. Modern AI systems have introduced new attack vectors and security concerns, including adversarial attacks against AI models and prompt injection attacks against LLMs.

#### Adversarial Attacks on AI Models

Non-LLM AI systems can be tricked by inputs crafted specifically to deceive them. In adversarial attacks, an attacker subtly manipulates input data to cause an AI model to mis-classify it or to make incorrect decisions. For example, adding imperceptible "noise" to a malware file or network packet might fool an ML-based detector into treating it as benign. In the context of LLMs, adversarial prompts might force a model into generating unintended outputs. A recent survey highlights that LLMs are susceptible to adversarial examples that manipulate model outputs and undermine their integrity (Chowdhury et al., 2024).

#### Prompt Injection and LLM Exploitation

Prompt injection attacks involve manipulating the input given to an LLM (often via cleverly crafted instructions) to bypass its intended behavior or safety controls, and researchers and threat actors have shown that it's possible to coerce LLMs into ignoring their safety filters by splitting. Such techniques could be used to make an AI system reveal confidential information or assist in wrongdoing, and these risks will likely be more significant as we develop AI “agents” that handle more and more important tasks (Valencia, 2024).

#### Data Poisoning

The effectiveness of AI models hinges on the quality of their training data. Attackers may attempt to "poison" this data – inserting malicious or misleading samples into an AI's training set or feedback loop so that the model learns the wrong patterns. In a poisoning attack, for instance, attackers with access to an organization's training process could inject mislabeled examples that bias the model's behavior. Over time, a poisoned model might begin to ignore certain attack patterns or even open a backdoor for the attacker (Chowdhury et al., 2024).

#### AI-Powered Cyberattacks

Adversaries are not only attacking AI – they are actively using AI to enhance their own operations. There is growing evidence that cybercriminals leverage AI/ML tools to automate attack tasks, improve phishing scams, and find vulnerabilities at scale. For example, LLMs like GPT-4 can create highly convincing phishing emails that are grammatically correct and tailored toward the victim with less give aways (TechSpective, 2024). The FBI has warned that AI is amplifying attackers' capabilities by increasing the speed and scale of attacks beyond human limits, including election interference efforts (FBI San Francisco, 2024).

### Training Data Leaks and Privacy

Large AI models (like LLMs) are often trained on massive datasets that may contain personal or proprietary information scraped from the internet or logs. This raises concerns about whether individuals have consented to such use of their data and how to protect personal data within training corpora. European regulators have taken action on this front – for example, Italy's Data Protection Authority temporarily banned ChatGPT in 2023 for alleged GDPR violations, citing the lack of a legal basis for OpenAI's mass collection of personal data to train the model (Politico, 2023).

A study by Carlini et al (2021) showed that by prompting an LLM, you can extract exact chunks of its training data, including personal identifiable information like people's names, contact details, private messages, and unique identifiers. This memorization effect is a direct privacy threat. It means that if an AI is trained on confidential or personal data, an attacker can trick the AI into revealing that data.

Many AI security tools work by extensively monitoring user activity and system behavior. While effective for security, this comprehensive monitoring can conflict with individuals' privacy expectations. AI might accidentally capture emails, files, or keystrokes that are personal or unrelated to threats (ISC2, 2024). Ensuring privacy requires careful scoping of what data is collected and analyzed. Organizations face a challenge in being transparent about AI-based monitoring while maintaining effective security postures.

## Conclusion

The integration of AI and large language models into cybersecurity is profoundly reshaping both defense and offense. AI provides a means to detect threats faster, respond at machine speed, and manage complexity that exceeds human cognition. At the same time, it introduces new attack surfaces – from adversarial exploits of ML models to AI-accelerated cyberattacks – and amplifies concerns around privacy and ethical use.

This dual role demands a nuanced approach. To maximize benefits, organizations should continue investing in AI-driven security capabilities, as evidence suggests they significantly enhance protection against evolving threats (Fortinet, 2023; Cloud Security Alliance, 2025). But they must do so with eyes open to the risks: implementing robust training and testing to thwart adversarial manipulation, safeguarding data used by and produced from AI, and adhering to emerging laws and ethical guidelines.

The increasing autonomy of AI systems raises concerns about control and accountability, requiring robust frameworks for continuous monitoring (Darraj et al., 2019). The development of AI security tools also needs to consider the limitations of implementation. The potential for AI-powered offensive capabilities presents both opportunities for security testing and risks of malicious exploitation (Valencia, 2024).

The evolving cyber arms race may be inevitable, but with careful management, the cybersecurity community can ensure that AI remains more of an asset than a liability in the never-ending battle to secure the digital world. Success in the cybersecurity domain will likely belong to those who can effectively harness AI's power and maintain vigilant control over it, balancing innovation with appropriate safeguards, transparency, and human oversight.

---

### References

Bradley, T. (2024, December 20). *The Rise of Agentic AI: How Hyper-Automation is Reshaping Cybersecurity and the Workforce*. Retrieved February 21, 2025, from TechSpective website: <https://techspective.net/2024/12/20/rise-of-agentic-ai-how-hyper-automation-is-reshaping-cybersecurity>

This article examines the evolution from predictive and generative AI to agentic AI in cybersecurity contexts. It defines agentic AI as autonomous systems capable of understanding tasks, making decisions, and acting with minimal human input. The piece includes expert perspectives on how AI is transitioning from simply executing workflows to autonomously orchestrating and completing complex tasks while collaborating across domains. This source is especially valuable for the future implications section, illustrating the trajectory toward increasingly autonomous security systems. The article also addresses the changing relationship between humans and AI systems, which relates to ethical considerations around AI deployment.

Carlini, N., Tramèr, F., Wallace, E., Jagielski, M., Herbert-Voss, A., Lee, K., Roberts, A., Brown, T., Song, D., Erlingsson, Ú., Oprea, A., & Raffel, C. (2021). Extracting training data from large language models. In *30th USENIX Security Symposium* (USENIX Security 21) (pp. 2633-2650). USENIX Association. <https://www.usenix.org/conference/usenixsecurity21/presentation/carlini-extracting>

This research demonstrates a critical vulnerability of large language models by showing how adversaries can extract specific training data through careful querying. The paper provides concrete evidence that larger models are more vulnerable to this type of attack, raising significant privacy concerns. The researchers extracted personally identifiable information, conversations, code, and other sensitive data from GPT-2, despite each extracted sequence appearing in just one training document. This work is directly relevant to the privacy and data leakage risks section, highlighting how AI models can inadvertently memorize and expose sensitive information. The authors also discuss potential safeguards for training large language models.

Chowdhury, A. G., Islam, M. M., Kumar, V., Shezan, Faysal Hossain, Kumar, V., Jain, V., & Chadha, A. (2024). *Breaking Down the Defenses: A Comparative Survey of Attacks on Large Language Models*. Retrieved February 16, 2025, from ArXiv.org: <https://arxiv.org/abs/2403.04786>

This survey examines key security issues with LLMs, making it relevant to my "Vulnerabilities and Risks" section, and provides a broader view of potential LLM vulnerabilities and attacks compared to Leroy (2024). It details both specific attacks and their practical impacts, which helps explain the security implications for AI systems. The paper's sections on defense strategies and data poisoning directly connect to my discussion of data protection and emerging challenges.

Darraj, E., Sample, C., & Justice, C. (2019). *Artificial Intelligence Cybersecurity Framework: Preparing for the Here and now With AI*. Academic Conferences International Limited. <https://www.proquest.com/docview/2261017088>

This research is crucial for understanding the systematic approach needed for AI security implementation. It introduces the concept of AI Dev/Sec/Ops and provides a structured framework for addressing AI security concerns, making it particularly relevant for organizations implementing AI systems. The paper's identification of twenty AI cybersecurity issues and discussion of threat forecasting offers practical insights for developing comprehensive security measures for AI systems, especially relevant to the "Security Aspects" section of our outline.

European Union. (2024). Regulation (EU) 2024/1689 of the European Parliament and of the Council on artificial intelligence (Artificial Intelligence Act), Article 15. *Official Journal of the European Union*, <https://artificialintelligenceact.eu/article/15/>

This legislation establishes specific requirements for high-risk AI systems regarding their technical accuracy, resilience to attacks, and overall cybersecurity posture. The Article mandates that high-risk AI systems must be created with appropriate levels of accuracy and robust against attempts to exploit vulnerabilities. It requires implementers to establish safeguards against manipulation of AI systems, particularly those used in critical infrastructure or security applications. This source is essential to understanding the emerging regulatory landscape for AI in cybersecurity, especially in the European context. The specific requirements outlined connect directly to both the regulatory frameworks section and the security aspects and challenges of implementing AI systems.

FBI San Francisco. (2024). FBI Warns of Increasing Threat of Cyber Criminals Utilizing Artificial Intelligence | Federal Bureau of Investigation. Retrieved February 20, 2025, from Federal Bureau of Investigation website: <https://www.fbi.gov/contact-us/field-offices/sanfrancisco/news/fbi-warns-of-increasing-threat-of-cyber-criminals-utilizing-artificial-intelligence>

This warning from the FBI highlights the growing threat of cybercriminals leveraging AI tools to conduct more sophisticated attacks. It details how AI enhances attack capabilities by increasing speed, scale, and automation of malicious activities. The alert specifically mentions AI-driven phishing campaigns that are more convincing due to proper grammar and personalization, as well as AI-powered voice and video cloning techniques used to impersonate trusted individuals. This source provides official confirmation of AI-powered cyberattacks, making it relevant to the emerging security risks section. The warning demonstrates how the same AI technologies that strengthen defenses are being weaponized by adversaries.

Fortinet. (2023). *How Artificial Intelligence (AI) Can Help in Discovering Unknown Cybersecurity Threats*. Retrieved February 22, 2025, from Fortinet website: <https://www.fortinet.com/resources/cyberglossary/artificial-intelligence-in-cybersecurity>

This site explores how AI enhances cybersecurity systems through automation, pattern recognition, and adaptive learning capabilities. It emphasizes AI's role in automating routine security tasks like log analysis and vulnerability scanning, freeing human analysts to focus on more complex strategic activities. The document highlights how AI-powered systems provide real-time threat detection and response capabilities beyond human limitations. It is relevant to the defensive applications section, demonstrating concrete ways AI strengthens cybersecurity postures. It also discusses AI's ability to adapt and evolve against emerging threats, connecting to the future implications of AI in security.

Kalva, R. (2025, January 10). Next-Gen AI Cybersecurity: Reshape Digital Defense | CSA. Retrieved February 20, 2025, from Cloudsecurityalliance.org website: <https://cloudsecurityalliance.org/blog/2025/01/10/next-gen-cybersecurity-with-ai-reshaping-digital-defense>

This article explores how AI integration transforms cybersecurity frameworks through enhanced threat detection, predictive analytics, and automated response capabilities. It examines AI's advantages over traditional rule-based security measures, particularly when confronting sophisticated, AI-driven attacks from cybercriminals. The piece specifically addresses AI applications in securing Internet of Things (IoT) networks and building adaptive defense systems for dynamic IT environments. This source is particularly relevant to the defensive applications section, providing concrete examples of AI's role in modern security strategies. The article's focus on practical implementation strategies offers insights for organizations looking to develop resilient, AI-powered security postures in response to evolving threats.

Long, Z., Yan, H., Shen, G., Zhang, X., He, H., & Cheng, L. (2024). A Transformer-based network intrusion detection approach for cloud security. *Journal of Cloud Computing,* *13*(1), 5. <https://doi.org/10.1186/s13677-023-00574-9>

This research demonstrates an application of AI (specifically the "transformer" architecture, which is the same architecture as LLMs) for strengthening cloud security systems. The paper is relevant to my topic as it showcases how modern AI architectures can be used for cybersecurity applications, especially related to network security, with their model achieving high accuracy in threat detection. It discusses how certain components of many LLMs (like they way they are designed to pay attention to difference aspects of language) can be used for security applications in cloud environments like finding breaches.

Park, S. (2024). Bridging the Global Divide in AI Regulation: A Proposal for a Contextual, Coherent, and Commensurable Framework. *Washington International Law Journal,* *33*(2), 216-269. <http://mutex.gmu.edu/login?url=https://www.proquest.com/scholarly-journals/bridging-global-divide-ai-regulation-proposal/docview/3109480667/se-2>

This paper is not just about AI's cybersecurity implications, but it is relevant for understanding the importance of regulation around AI security and safety, especially the pros and cons of high-level vs. more context-specific approaches to regulation. It discusses how different regions are approaching AI governance (like the EU's AI Act), which impacts how organizations must implement cybersecurity measures for AI systems (especially related to data privacy). In particular, it has a lot of insights regarding data security related to AI and LLMs, like in the healthcare industry. The paper categorizes AI tasks which provides a useful structure for considering risks and different security implications and requirements as generative AI advances.

Nana, S. R., Didier Bassole, Guel, D., & Sie, O. (2024). Deep Learning and Web Applications Vulnerabilities Detection: An Approach Based on Large Language Models. *International Journal of Advanced Computer Science and Applications, 15*(7) <https://doi.org/10.14569/ijacsa.2024.01507135>

This paper directly highlights AI as a security solution, specifically going over how LLMs can be used to enhance the security of web applications. It's especially relevant to my topic as it shows both an opportunity with AI (using LLMs for vulnerability detection) and implicitly points security risks with AI (the growing complexity of web applications, using AI for hacking, and the challenges of traditional security methods). The paper also highlights an important limitation of traditional machine learning approaches to web security - the need for large, current datasets - and discusses how LLMs might overcome this limitation since they already have a lot of knowledge and data embedded in them.

Sircar, T. (2024). *The European Data Protection Board Releases Opinion on Artificial Intelligence*. Natlawreview.com; National Law Review. <https://natlawreview.com/article/european-data-protection-board-releases-opinion-artificial-intelligence>

This article summarizes the European Data Protection Board's opinion on how GDPR applies to artificial intelligence systems. It outlines the three-step test for using legitimate interest as a legal basis for AI model training, highlighting regulatory expectations for AI developers. The opinion specifically supports using AI for threat detection and cybersecurity under legitimate interest while emphasizing the need for careful risk assessments and adherence to GDPR principles. This source is particularly relevant to the regulatory frameworks section, providing concrete guidance on balancing security benefits with privacy compliance. The article also addresses governance practices like regular audits and documentation that organizations should implement when deploying AI security systems.

Valencia, L. J. (2024, May 9). *Artificial Intelligence as the New Hacker: Developing Agents for Offensive Security*. ArXiv.org. <https://doi.org/10.48550/arXiv.2406.07561>

This paper is particularly relevant as it demonstrates the dual-use nature of AI in cybersecurity through the development of ReaperAI, an AI system designed for offensive security testing. It highlights both the potential benefits (improved penetration testing and vulnerability detection) and risks (potential misuse) of autonomous AI systems in cybersecurity. The paper's discussion of RAG and advanced prompting techniques provides valuable insights into how AI systems might be used both defensively and offensively in cybersecurity contexts, making it especially relevant to discussions of future security implications of AI.

Watney, M. M. (2020). Artificial Intelligence and its Legal Risk to Cybersecurity. Academic Conferences International Limited. <https://pure.uj.ac.za/en/publications/artificial-intelligence-and-its-legal-risk-to-cybersecurity>

This paper provides crucial insights into the legal and financial implications of AI in cybersecurity, particularly relevant to our discussion of regulatory frameworks and risk management. Its analysis of both beneficial and harmful uses of AI in cybersecurity, along with its emphasis on preventative approaches and multi-stakeholder cooperation, offers important perspectives on how to address AI security challenges comprehensively. The paper's discussion of potential annual cybercrime losses provides concrete context for the importance of proper AI security measures.
