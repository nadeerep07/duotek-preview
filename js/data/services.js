/**
 * Duotek Group — Complete Services & Company Profile Data
 * Based on official UAE company profile & service catalog
 */

export const companyProfile = {
  name: 'Duotek Group',
  tagline: 'Smarter spaces. Better days.',
  phone: '+971 50 504 9838',
  phoneTel: '+971505049838',
  email: 'sales@duotek.ae',
  website: 'www.duotek.ae',
  location: 'Dubai & United Arab Emirates',
  about: 'Duotek Group is a technology solutions and IT infrastructure services provider based in the United Arab Emirates, delivering reliable, scalable, and innovative solutions for businesses, commercial spaces, offices, and residential properties. We specialize in end-to-end technology solutions from planning and installation to configuration, maintenance, and ongoing technical support.',
  mission: 'To deliver dependable IT infrastructure, security, communication, and automation solutions that empower businesses and residential clients through technology.',
  vision: 'To become a trusted technology solutions partner in the UAE, recognized for our technical expertise, customer satisfaction, and commitment to quality.'
};

export const corePillars = [
  {
    id: 'intro',
    index: 0,
    number: '00',
    category: 'Overview',
    eyebrow: 'Technology for real life • UAE',
    titleMain: 'Smarter',
    titleSub: 'spaces.<br>Better days.',
    description: 'Duotek Group delivers dependable IT infrastructure, security systems, business communication, and smart automation across Dubai and the UAE.',
    caption: 'Duotek Group / UAE Technology Infrastructure',
    image: 'assets/images/hero-workspace.webp',
    imageAlt: 'Duotek Group contemporary technology workspace in the UAE'
  },
  {
    id: 'amc',
    index: 1,
    number: '01',
    category: 'IT AMC Support',
    eyebrow: '01 / 05 — IT Annual Maintenance Contract',
    titleMain: 'Ready for every',
    titleSub: 'day.',
    description: 'Comprehensive IT Annual Maintenance Contract (AMC) services to help businesses maintain reliable operations and minimize technical downtime with scheduled health audits and rapid response.',
    highlights: [
      'Desktop, laptop, and OS troubleshooting',
      'Hardware, software, and printer support',
      'Network connectivity & user access management',
      'Preventive health checks & monthly service reporting'
    ],
    caption: 'IT AMC & Proactive Maintenance / 01',
    image: 'assets/images/service-amc.webp',
    imageAlt: 'Duotek IT maintenance and proactive server support'
  },
  {
    id: 'cabling-racks',
    index: 2,
    number: '02',
    category: 'Cabling & Server Racks',
    eyebrow: '02 / 05 — Structured Cabling & Server Racks',
    titleMain: 'Clean lines.',
    titleSub: 'Solid core.',
    description: 'Fluke-tested Cat6/Cat6A structured cabling and organized network rack installations for offices, data closets, and commercial facilities. Clean cable dressing, port labeling, and scalable topology.',
    highlights: [
      'Cat6 & Cat6A data and voice network cabling',
      'Patch panel termination, labeling & cable dressing',
      'Wall-mounted & floor-standing network rack installation',
      'Fluke cable certification testing & server room setups'
    ],
    caption: 'Structured Cabling & Rack Setup / 02',
    image: 'assets/images/service-cloud.webp',
    imageAlt: 'Professional network rack and structured cabling infrastructure'
  },
  {
    id: 'telephony-3cx',
    index: 3,
    number: '03',
    category: 'Telephony & 3CX',
    eyebrow: '03 / 05 — IP Telephony & 3CX PBX Solutions',
    titleMain: 'Connected',
    titleSub: 'conversations.',
    description: 'Modern IP phone systems and 3CX IP PBX deployments that unify business communications. Flexible softphones, multi-level IVR, remote extensions, and cost-effective SIP trunks.',
    highlights: [
      '3CX IP PBX deployment, licensing, and remote softphones',
      'IP desk phones, SIP trunks & extension management',
      'Digital receptionist (IVR), call queues & routing',
      'Voicemail, call recording & mobile apps for remote work'
    ],
    caption: 'IP Telephony & 3CX Solutions / 03',
    image: 'assets/images/service-web.webp',
    imageAlt: 'Duotek modern IP telephony and 3CX business phone deployment'
  },
  {
    id: 'security-access',
    index: 4,
    number: '04',
    category: 'Security & Access',
    eyebrow: '04 / 05 — CCTV Surveillance & Access Control',
    titleMain: 'Confidence',
    titleSub: 'built in.',
    description: 'Commercial-grade IP CCTV surveillance and smart access control systems. High-definition monitoring, biometric/face-recognition terminals, and secure electromagnetic door locks.',
    highlights: [
      'High-resolution IP cameras, NVR/DVR & remote live viewing',
      'Biometric, facial recognition & RFID card access control',
      'Magnetic door locks, exit buttons & time-based permissions',
      'Coverage design, PoE switches & compliance setups'
    ],
    caption: 'CCTV & Biometric Access Control / 04',
    image: 'assets/images/service-security.webp',
    imageAlt: 'Commercial CCTV surveillance and access control system'
  },
  {
    id: 'automation-smart',
    index: 5,
    number: '05',
    category: 'Smart Automation',
    eyebrow: '05 / 05 — Smart Automation & Controls',
    titleMain: 'Spaces that',
    titleSub: 'respond.',
    description: 'Intelligent automation for residences, executive offices, and luxury environments. Intuitive lighting scenes, motorized climate and blinds, smart locks, and unified control panels.',
    highlights: [
      'Smart architectural lighting & scene-based switching',
      'Automated climate, smart thermostats & motorized blinds',
      'Smart door locks & sensor-driven automation triggers',
      'Wall control panels & smartphone app synchronization'
    ],
    caption: 'Smart Home & Building Automation / 05',
    image: 'assets/images/service-automation.webp',
    imageAlt: 'Smart home automation control panel and ambient lighting'
  }
];

export const allServicesCatalog = [
  {
    category: 'IT Support & Systems',
    code: 'A',
    title: 'IT AMC – Annual Maintenance Contract',
    shortDesc: 'Comprehensive maintenance contracts to ensure zero downtime and reliable day-to-day IT operations for UAE enterprises.',
    items: [
      'Desktop and laptop maintenance and troubleshooting',
      'Hardware and software support & OS configuration',
      'Network troubleshooting and connectivity support',
      'Printer installation and diagnostic troubleshooting',
      'User account, credentials and access management',
      'IT equipment health audits & preventive maintenance',
      'Basic server and corporate email support',
      'Technical support for office IT infrastructure',
      'Scheduled preventive visits and detailed service reports'
    ]
  },
  {
    category: 'Infrastructure & Cabling',
    code: 'B',
    title: 'Structured Cabling Solutions',
    shortDesc: 'Clean, reliable, and Fluke-certified Cat6/Cat6A cabling installations for corporate offices, commercial towers, and retail spaces.',
    items: [
      'Cat6 and Cat6A network cabling infrastructure',
      'Data and voice cabling infrastructure planning',
      'Network point installation, termination & testing',
      'RJ45 outlet and keystone jack installation',
      'Faceplate and data outlet installation',
      'Patch panel installation, punch-down and termination',
      'Network cable dressing, bundling and cable management',
      'Cable identification with durable professional labeling',
      'Network point testing and connectivity verification',
      'Fluke cable testing and certification reports',
      'Existing network cabling inspection and rectification',
      'New office fit-out and commercial building cabling projects'
    ]
  },
  {
    category: 'Infrastructure & Cabling',
    code: 'C',
    title: 'Network Rack Installation & Management',
    shortDesc: 'Professional network cabinets, server room organization, clean patch cord management, and PDU power distribution.',
    items: [
      'Network rack supply and structural installation',
      'Wall-mounted and floor-standing rack installation',
      'Network switch, router, and patch panel mounting',
      'Server and network hardware mounting & bracing',
      'Horizontal and vertical cable management and dressing',
      'Patch cord management and port-by-port labeling',
      'Rack layout planning and thermal equipment arrangement',
      'Power distribution unit (PDU) installation & load balancing',
      'Rack earthing and grounding coordination',
      'Network cabinet clean-up, auditing and ongoing maintenance',
      'Server room infrastructure setup from ground up',
      'Rack relocation, capacity upgrades, and reorganization'
    ]
  },
  {
    category: 'Business Communication',
    code: 'D',
    title: 'IP Telephony & Business Phone Systems',
    shortDesc: 'Crystal-clear voice communication systems, SIP trunking, desk phones, and intelligent call routing for modern workplaces.',
    items: [
      'IP phone system installation, deployment and setup',
      'IP desk phone supply and multi-extension deployment',
      'SIP phone and SIP trunk configuration',
      'Extension creation, dial-plans and user management',
      'Internal intercom and external calling configuration',
      'Call transfer, forwarding, hunt groups and routing rules',
      'Auto-attendant and multi-tier IVR configuration',
      'Voicemail-to-email and message configuration',
      'Remote extension setup for distributed teams',
      'Integration with compatible network infrastructure',
      'Ongoing troubleshooting and maintenance of IP phone systems'
    ]
  },
  {
    category: 'Business Communication',
    code: 'E',
    title: '3CX IP PBX Solutions',
    shortDesc: 'Certified 3CX communication platforms offering softphones, video conferencing, live chat integration, and call queues.',
    items: [
      '3CX system deployment, on-premise or cloud hosted',
      'IP PBX setup and centralized extension management',
      'Certified SIP trunk configuration with local telcos',
      'Zero-touch IP phone provisioning',
      'Inbound and outbound smart call routing',
      'IVR and multi-lingual digital receptionist setup',
      'Ring groups, call queues and SLA monitoring',
      'Business hours, holiday, and night-mode call routing',
      'Voicemail, transcription and automated call forwarding',
      'Mobile (iOS/Android) and desktop softphone configuration',
      'Remote working and remote extension connectivity',
      'System backup, failover and configuration support',
      'Troubleshooting, version upgrades, and ongoing maintenance'
    ]
  },
  {
    category: 'Security & Access',
    code: 'F',
    title: 'CCTV Surveillance Systems',
    shortDesc: 'High-definition IP surveillance with remote viewing, smart analytics, NVR storage, and SIRA-compliant Hikvision CCTV cameras in Dubai.',
    items: [
      'Hikvision CCTV Camera Dubai supply, installation and maintenance',
      'Indoor dome, outdoor bullet, PTZ and turret cameras with ColorVu',
      'Network Video Recorder (NVR) configuration and storage sizing',
      'Digital Video Recorder (DVR) solutions where applicable',
      'Camera positioning, field-of-view, and blind-spot coverage planning',
      'PoE camera and PoE network switch configuration',
      'CCTV cabling, conduits, and weather-proof termination',
      'Secure remote viewing configuration on iOS, Android & PC',
      'Recording schedules, motion detection, and playback archiving',
      'CCTV system commissioning, testing and SIRA compliance audit',
      'Existing camera system troubleshooting and sensor cleaning',
      'Preventive maintenance visits and system expansion upgrades'
    ]
  },
  {
    category: 'Security & Access',
    code: 'G',
    title: 'Access Control Systems',
    shortDesc: 'Biometric, RFID card, and facial recognition access control in Dubai to secure sensitive premises, server rooms, and office perimeters.',
    items: [
      'Access Control Dubai turnkey installation and system maintenance',
      'Hikvision Access Control facial recognition (MinMoe) & biometric terminals',
      'RFID card and key-fob access control systems',
      'PIN code and digital keypad access systems',
      'Biometric fingerprint and contactless facial recognition terminals',
      'Door access readers, request-to-exit buttons & controllers',
      'Electromagnetic locks, drop-bolts & compatible door hardware',
      'Exit buttons, break-glass units and door contact integration',
      'Access control panel wiring, power backup & network configuration',
      'User enrollment, credential issuance and permission management',
      'Time-based access schedules and visitor permissions',
      'Integration with compatible CCTV or attendance logging systems',
      'Testing, commissioning, troubleshooting, and support maintenance'
    ]
  },
  {
    category: 'Smart Automation',
    code: 'H',
    title: 'Home Automation & Smart Solutions',
    shortDesc: 'Intuitive smart home solutions bringing luxury, comfort, energy efficiency, and professional sound systems to residential and executive spaces.',
    items: [
      'Smart architectural lighting control, scene setting, and dimming',
      'Automated switching and intelligent electrical control',
      'Smart motorized curtain and blind control',
      'Smart thermostat and AC climate control integration',
      'Professional Speakers Dubai: Bosch & JBL commercial sound & background music',
      'Smart digital door lock integration with keyless access',
      'CCTV and smart security sensor integration',
      'Motion sensors, door sensors and automation triggers',
      'Central smart home touchscreen panels and mobile apps',
      'Customized scene-based automation (Home, Away, Night, Movie)',
      'Integration of compatible third-party smart ecosystems',
      'System configuration, testing, and fine-tuned commissioning'
    ]
  },
  {
    category: 'IT Support & Systems',
    code: 'I',
    title: 'Server Installation & Configuration',
    shortDesc: 'Robust server setups, Windows Server Active Directory, file sharing, and automated disaster-recovery backup solutions.',
    items: [
      'Physical rackmount server and virtual server (VM) setup',
      'Windows Server OS installation and baseline hardening',
      'Server hardware deployment, RAM & RAID array configuration',
      'Active Directory (AD DS) and domain services configuration',
      'User, group, and organizational unit (OU) management',
      'File server setup, shared folders, and quota management',
      'NTFS folder permissions and role-based access control',
      'DNS, DHCP, and static IP scope configuration',
      'Network and server interface bonding and integration',
      'Storage configuration, NAS integration, and capacity planning',
      'Automated backup configuration and disaster restoration testing',
      'Server health monitoring, security patches, and troubleshooting',
      'Server OS migration, hardware refreshes, and upgrades',
      'Secure remote access, VPN, and RDP gateway configuration'
    ]
  },
  {
    category: 'IT Support & Systems',
    code: 'J',
    title: 'Business Email Solutions & Configuration',
    shortDesc: 'Corporate email hosting with Microsoft 365, Google Workspace, custom domains, and strict SPF/DKIM/DMARC deliverability.',
    items: [
      'Business email account creation on your custom company domain',
      'Company domain DNS verification and record setup',
      'Microsoft 365 (Office 365) business email configuration',
      'Google Workspace corporate email deployment',
      'Outlook desktop, mobile app, and webmail setup for staff',
      'Seamless email data migration from legacy servers without data loss',
      'DNS, MX, SPF, DKIM, and DMARC authentication configuration',
      'Shared mailboxes, department aliases, and distribution groups',
      'Email synchronization across desktop, laptop, and smartphones',
      'Advanced email security, spam filtering, and phishing protection',
      'User onboarding, password policies, and multi-factor auth (MFA)',
      'Cloud email backup, retention archiving, and mailbox recovery'
    ]
  },
  {
    category: 'Infrastructure & Cabling',
    code: 'K',
    title: 'IT Networking Solutions',
    shortDesc: 'Enterprise-grade LAN/WAN, managed switches, high-speed business Wi-Fi, VLAN segmentation, and hardware firewalls in Dubai.',
    items: [
      'Local Area Network (LAN) and Wide Area Network (WAN) setup',
      'Aruba Access Point Dubai Wi-Fi 6 wireless deployments & roaming',
      'Cisco Switch Supplier Dubai: Enterprise managed core & PoE switches',
      'UniFi Switch Dubai: Ubiquiti UniFi switches, gateways & Cloud Keys',
      'Fortinet Firewall Dubai: FortiGate UTM security & threat protection',
      'DrayTek Router Dubai: High-availability multi-WAN & VPN setup',
      'Enterprise router, core switch, and edge switch configuration',
      'Hardware firewall installation, security policies, and UTM setup',
      'Business Wi-Fi roaming, guest portal, and bandwidth management',
      'VLAN configuration for VoIP, CCTV, and staff network isolation',
      'VPN setup for secure site-to-site and remote work connectivity',
      'Dual-ISP failover and internet connectivity load-balancing',
      'Comprehensive network documentation, topology maps, and labeling'
    ]
  }
];

export const additionalServices = [
  'Aruba Access Points & high-density wireless planning',
  'Hikvision CCTV cameras, ColorVu & NVR storage arrays',
  'Hikvision Access Control & biometric door locks',
  'Fortinet hardware firewalls & cybersecurity UTM',
  'Cisco Switches (Catalyst & Business series)',
  'Ubiquiti UniFi switches, gateways & Wi-Fi',
  'DrayTek Routers with multi-WAN failover',
  'Bosch & JBL Professional Speakers for commercial audio',
  'IT equipment supply (desktops, laptops, monitors, peripherals)',
  'Cat6 and Cat6A structured cabling & server rack dressing',
  'Server room reorganization and cable overhaul',
  'IT infrastructure relocation for office moving',
  'CCTV and access control preventive maintenance',
  'IP phone system audit and extension maintenance',
  'Turnkey office IT setup for new business start-ups',
  'Technology upgrades and multi-vendor system integration',
  'LED display wall supply, mounting and controller setup',
  'IT consultancy and infrastructure capacity planning'
];

export const industriesList = [
  { name: 'Corporate Offices & Business Centres', desc: 'Secure networks, IP telephony, cabling, and responsive IT AMC.' },
  { name: 'Interior Fit-Out & Contracting', desc: 'Cabling rough-ins, server racks, CCTV, and access control for projects.' },
  { name: 'Retail Shops & Showrooms', desc: 'PoE surveillance, reliable Wi-Fi, background music, and POS networking.' },
  { name: 'Clinics & Healthcare Facilities', desc: 'Secure data management, IP phones, surveillance, and uninterrupted uptime.' },
  { name: 'Educational Institutions', desc: 'Campus-wide structured cabling, secure Wi-Fi, and access-controlled zones.' },
  { name: 'Hotels & Hospitality', desc: 'Guest Wi-Fi, PBX phone systems, surveillance coverage, and lighting controls.' },
  { name: 'Warehouses & Industrial Facilities', desc: 'Long-distance fiber/copper runs, ruggedized CCTV, and network racks.' },
  { name: 'Residential Villas & Apartments', desc: 'Smart home automation, motorized shades, security, and smart locks.' },
  { name: 'Small & Medium-Sized Enterprises (SMEs)', desc: 'Affordable, scalable IT infrastructure tailored to business growth.' }
];

export const projectApproachSteps = [
  {
    step: '01',
    title: 'Consultation & Assessment',
    desc: 'Understanding client requirements, site blueprints, infrastructure capacity, and technical objectives.'
  },
  {
    step: '02',
    title: 'Planning & Design',
    desc: 'Architecting a reliable, scalable technical solution aligned with the project scope, timeline, and budget.'
  },
  {
    step: '03',
    title: 'Supply & Installation',
    desc: 'Delivering genuine equipment, structured cabling, rack dressing, and professional on-site mounting.'
  },
  {
    step: '04',
    title: 'Configuration & Testing',
    desc: 'Configuring routers, PBX, access permissions, NVRs, and running connectivity checks before handover.'
  },
  {
    step: '05',
    title: 'Documentation & Handover',
    desc: 'Providing port labeling schemes, configuration documentation, user training, and testing sign-off.'
  },
  {
    step: '06',
    title: 'Maintenance & Support',
    desc: 'Providing ongoing technical support, preventive visits, and fast response via tailored AMC contracts.'
  }
];

export const whyChooseDuotek = [
  { title: 'Comprehensive IT & ELV Under One Roof', text: 'From cabling and racks to servers, telephony, CCTV, and smart automation.' },
  { title: 'Professional Installation & Clean Workmanship', text: 'Rigorous cabling practices, proper labeling, and organized server racks.' },
  { title: 'Tailored Solutions for Your Scale', text: 'Customized configurations designed around your operational requirements and budget.' },
  { title: 'Reliability, Security & Performance', text: 'High-grade components, redundancy planning, and certified testing standards.' },
  { title: 'Preventive Maintenance & Fast Support', text: 'Dedicated IT AMC packages designed to prevent issues before downtime occurs.' },
  { title: 'Support for New & Existing Systems', text: 'Expertise in fresh office fit-outs as well as auditing and rectifying legacy setups.' }
];

/**
 * =========================================================================
 * DIGITAL SOLUTIONS & SOFTWARE PRACTICE (MODULAR ARCHITECTURE)
 * Status: Active Expanding Practice (Kept separate from primary 11 IT & ELV services)
 * Easy to remove: Simply delete this export and the HTML preview sections.
 * Does NOT touch active corePillars or allServicesCatalog.
 * =========================================================================
 */
export const digitalSolutionsPractice = [
  {
    id: 'software-dev',
    status: 'Digital Engineering Practice',
    badge: 'Web • Mobile • Cloud',
    title: 'Custom Software & Digital Solutions',
    shortDesc: 'Engineering custom web platforms, native mobile applications, enterprise automation systems, and cloud APIs.',
    capabilities: [
      {
        title: 'Custom Web Applications',
        desc: 'Enterprise portals, client dashboards, B2B platforms, and SaaS products.'
      },
      {
        title: 'Mobile App Engineering',
        desc: 'Native and cross-platform iOS & Android mobile apps with modern UX.'
      },
      {
        title: 'Cloud Architecture & APIs',
        desc: 'REST & GraphQL microservices, database design, and cloud scalability.'
      },
      {
        title: 'Systems Integration & Automation',
        desc: 'Bridging physical IT/ELV devices with custom ERP, CRM, and automated workflows.'
      }
    ]
  }
];

