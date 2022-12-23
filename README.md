# my project-cybersecurity-project 1


Reference: https://owasp.org/www-project-top-ten/


LINK: link to the repository
https://github.com/liyang19960201/Cyber-security-Porject-1.git
This application can been launch by python3 manage.py from terminal with port number 8000.

FLAW 1:A04:2021—Insecure Design
https://github.com/liyang19960201/Cyber-security-Porject-1/blob/55b5aec5db580cd0c10275ba454fe5a891569207/Project-1/static/script.js#L18
In this line, the code is using an If status to return a secret value because this is a static JavaScript asset, which can be manipulated during web server operating. This can be an obvious insecure design since it can easily expose the secret message by changing item.value content.
This is a new category for 2021, with a focus on risks related to design flaws. If we genuinely want to “move left” as an industry, it calls for more use of threat modeling, secure design patterns and principles, and reference architectures.

One of method to fix this flaw is that launching listvulnerabilities.py to check those potential vulnerabilities, once they spot it, the developer can discontinue with this static JS asset. On the other hand, developer can use Docker to have a virtual environmental setup with more secure and integrated environment.

FLAW 2: A09:2021-Security Logging and Monitoring Failures
https://github.com/liyang19960201/Cyber-security-Porject-1/blob/55b5aec5db580cd0c10275ba454fe5a891569207/Project-1/static/script.js#L24
If there is an error happening in this application including sensitive data, it will be exposed by console.log with details. Which indicated that log in failure, sensitive data operation would be displayed, and attackers can know the fundamental structure of this application. The admin might not be aware of that when attackers hacked system already. This category is expanded to include more types of failures, is challenging to test for, and isn’t well represented in the CVE/CVSS data. However, failures in this category can directly impact visibility, incident alerting, and forensics.

The way to fix it could be applying print (error content) rather than console.log considering the sensitive information. As for business groups, they should consider a logging middleware to constrain errors it can display without compromising repairing procedure in an actual software implementation. Auditable events, such as logins, failed logins, and high-value transactions, are not logged.Warnings and errors generate no, inadequate, or unclear log messages.Logs of applications and APIs are not monitored for suspicious activity.Logs are only stored locally.

FLAW 3: A07:2021-Identification and Authentication Failures
https://github.com/liyang19960201/Cyber-security-Porject-1/blob/55b5aec5db580cd0c10275ba454fe5a891569207/Project-1/server/db.sql#76
The password was encrypted by SHA-256 standard, but this line indicated that it contains the sensitive information as an administrator, which is an ‘open gate’ for attackers, by combing with hackpassoword.py, it is possible to attain access as an admin and access all personal user’s data and corrupt the entire system, and they don’t even need to go through authentication barrier. This flaw was previously Broken Authentication and is sliding down from the second position, and now includes CWEs that are more related to identification failures. This category is still an integral part of the Top 10, but the increased availability of standardized frameworks seems to be helping.

The obvious solution is that not displaying admin in the first place and make an even longer password with encryption. The more important thing is that that sensitive information was written by fixed SQL code, which would be better for users to typic in by themselves just like a normal register system. Where possible, implement multi-factor authentication to prevent automated credential stuffing, brute force, and stolen credential reuse attacks.Do not ship or deploy with any default credentials, particularly for admin users.Implement weak password checks, such as testing new or changed passwords against the top 10,000 worst passwords list.Align password length, complexity, and rotation policies with National Institute of Standards and Technology (NIST) 800-63b's guidelines in section 5.1.1 for Memorized Secrets or other modern, evidence-based password policies. Ensure registration, credential recovery, and API pathways are hardened against account enumeration attacks by using the same messages for all outcomes.Limit or increasingly delay failed login attempts, but be careful not to create a denial of service scenario. Log all failures and alert administrators when credential stuffing, brute force, or other attacks are detected.

FLAW 4: A01:2021-Broken Access Control
https://github.com/liyang19960201/Cyber-security-Porject-1/blob/55b5aec5db580cd0c10275ba454fe5a891569207/Project-1/server/pages/templates/views.py#10-14
This changeUsernameView() is accessible from url.py with same path, the problem is that any web user can access this url to change the password for admin, which is obviously insecure for admin in a large-scale system. It moves up from the fifth position; 94% of applications were tested for some form of broken access control. The 34 Common Weakness Enumerations (CWEs) mapped to Broken Access Control had more occurrences in applications than any other category.

The solution would add an authentication for accessible users, it could use @authentication_access decorator in view.py or any similar strategies to constrain access for this operation.

FLAW 5: A03:2021-Injection
https://github.com/liyang19960201/Cyber-security-Porject-1/blob/55b5aec5db580cd0c10275ba454fe5a891569207/Project-1/server/src/injection.py#15
There is an insecure query in this file, which can find the password stored in user’s table. Although the result only has one entry with admin password, but it stills can create damage for database system. Once this query gets successful return, it can access sensitive data with admin information to create bigger damage to system. Code Injection, also known as Remote Code Execution or Code Evaluation, involves modifying an executable or script containing malicious code. Hackers first probe the application for attack surfaces that can accept untrusted data and use it when executing program code. These include direct input such as file uploads, form fields, or other data sources such as cookies and query string parameters.

There are two major methods, one of is to utilize whitelisting for input validation. Whitelisting is simpler to set up and gives security teams stricter control over what data or types of input the application can process, thereby helping to reduce the risk of an attacker executing malicious code. Use a static type of system to enforce language separation – With static type systems, teams can develop declarative control checks without the additional run-time overhead.



