Free One – Onchain Freelance Marketplace with Zero-Knowledge Proofs (ZKPs)

Free One is a decentralized platform that enables freelancers and clients to interact without KYC or centralized administrative processes.

By leveraging Zero-Knowledge Proofs (ZKPs) and smart contracts, it ensures secure and verifiable transactions while eliminating the risk of non-payment that freelancers often face.




Objectives :

- The goal is to create a multi-format platform—Website, Mobile App, SaaS—where services are bought and sold between individuals, similar to existing platforms like ComeUp, Malt, and Fiverr.

- The ultimate objective is to eliminate the risk of freelancers not getting paid despite delivering their work, using ZKPs to verify the completion of tasks without exposing sensitive details.

- A simple and intuitive UX will be a key focus, with blockchain serving as an efficient and indispensable enabler of decentralization and transaction speed compared to traditional finance (TradFi).




Technical Features :

- Smart contract escrow: Funds are locked until the work is validated.

- Cryptographic verification via ZKPs: Proves that the freelancer’s work is complete without revealing the actual content to the client.

- Decentralized dispute resolution: Arbitration based on ZKP evidence.

- Wallet-based authentication: No centralized account management.



Technical Challenges :

- ZK Verification: Developing algorithms capable of validating a wide variety of multimedia content, text, etc.

- Trustless dispute resolution: Ensuring fair arbitration. Since freelancers' work varies significantly in nature, verifying it objectively is complex. Client satisfaction is subjective, yet the client must have 
  a preview of the final work before approving payment. The technical feasibility of such a preview remains an open question.

  If the client is dissatisfied despite having paid/approved the delivery (e.g., receiving a low-quality image, a blurred or partially altered text file), they will have the right to dispute it and be immediately 
  refunded, while the work is returned to the freelancer. This mechanism ensures customer satisfaction and maintains trust. However, the exact strategy to offer a proper preview of the freelancer’s work still 
  needs further consideration.

- Decentralized frontend: UI built in React, hosted on IPFS/Arweave, ensuring decentralization while allowing updates, improvements, and bug fixes. A fully decentralized approach is being considered to prevent 
  any possibility of platform shutdown.

- Decentralized blockchain selection: Ethereum, zkSync, StarkNet, Polygon, etc. Choosing the right blockchain is critical for maximizing decentralization and transaction speed.




Next Steps :

- MVP development: Create a landing page, platform dashboard, and implement escrow smart contracts with ZKP verification.

- Native token: Used for governance and decision-making on project-related challenges.

- Security testing & audits: To ensure protocol safety.

- MVP launch & user feedback

- Optimizations, scalability improvements, and future developments
