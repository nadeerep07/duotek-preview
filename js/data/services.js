/**
 * Duotek Group — Complete Services & Company Profile Data
 * Based on official UAE company profile & service catalog
 */

export const companyProfile = {
  name: 'Duotek Group',
  tagline: 'IT, ELV & software solutions in Dubai.',
  phone: '+971 50 504 9838',
  phoneTel: '+971505049838',
  email: 'sales@duotek.ae',
  website: 'duotek.ae',
  location: 'Dubai & United Arab Emirates',
  founded: '2015',
  about: 'Established in Dubai in 2015, Duotek Group delivers end-to-end IT and ELV infrastructure, managed technical support, security, communications, automation, and custom software for businesses and connected properties across the UAE.',
  mission: 'To deliver dependable IT infrastructure, security, communication, automation, and software solutions that help UAE organizations operate more effectively.',
  vision: 'To become a trusted technology solutions partner in the UAE, recognized for our technical expertise, customer satisfaction, and commitment to quality.'
};

export const corePillars = [
  {
    id: 'intro',
    index: 0,
    number: '00',
    category: 'Overview',
    eyebrow: 'IT, ELV & Software • UAE',
    titleMain: 'IT, ELV & software',
    titleSub: 'solutions in Dubai.',
    description: 'Plan, install, support, and improve your business technology with one UAE team—from IT AMC and ELV infrastructure to custom web and mobile software.',
    caption: 'Duotek Group / IT, ELV & Software Engineering',
    image: 'assets/images/service-software-v2.webp',
    imageAlt: 'Duotek custom software and cloud engineering team in Dubai'
  },
  {
    id: 'amc',
    index: 1,
    number: '01',
    category: 'IT AMC Support',
    eyebrow: '01 / 05 — IT Annual Maintenance Contract',
    titleMain: 'IT AMC support',
    titleSub: 'for Dubai businesses.',
    description: 'Keep users, devices, networks, and essential office systems working with preventive maintenance and support matched to your environment.',
    highlights: [
      'Desktop, laptop, and OS troubleshooting',
      'Hardware, software, and printer support',
      'Network connectivity & user access management',
      'Preventive health checks & monthly service reporting'
    ],
    caption: 'IT AMC & Proactive Maintenance / 01',
    image: 'assets/images/service-amc-v2.webp',
    imageAlt: 'Duotek IT maintenance and proactive server support'
  },
  {
    id: 'cabling-racks',
    index: 2,
    number: '02',
    category: 'Cabling & Server Racks',
    eyebrow: '02 / 05 — Structured Cabling & Server Racks',
    titleMain: 'Structured cabling',
    titleSub: 'built to stay organized.',
    description: 'Cat6/Cat6A structured cabling and serviceable network racks for offices, fit-outs, data closets, and commercial facilities across the UAE.',
    highlights: [
      'Cat6 & Cat6A data and voice network cabling',
      'Patch panel termination, labeling & cable dressing',
      'Wall-mounted & floor-standing network rack installation',
      'Project-specific cable testing & server room setups'
    ],
    caption: 'Structured Cabling & Rack Setup / 02',
    image: 'assets/images/service-cabling.webp',
    imageAlt: 'Professional network rack and structured cabling infrastructure'
  },
  {
    id: 'telephony-3cx',
    index: 3,
    number: '03',
    category: 'Telephony & 3CX',
    eyebrow: '03 / 05 — IP Telephony & 3CX PBX Solutions',
    titleMain: '3CX telephony',
    titleSub: 'for connected teams.',
    description: 'Modern IP phone systems for reception, office teams, and remote staff, with extensions, softphones, call routing, IVR, and SIP trunk configuration.',
    highlights: [
      '3CX IP PBX deployment, licensing, and remote softphones',
      'IP desk phones, SIP trunks & extension management',
      'Digital receptionist (IVR), call queues & routing',
      'Voicemail, call recording & mobile apps for remote work'
    ],
    caption: 'IP Telephony & 3CX Solutions / 03',
    image: 'assets/images/service-telephony.webp',
    imageAlt: 'Duotek modern IP telephony and 3CX business phone deployment'
  },
  {
    id: 'security-access',
    index: 4,
    number: '04',
    category: 'Security & Access',
    eyebrow: '04 / 05 — CCTV Surveillance & Access Control',
    titleMain: 'CCTV & access control',
    titleSub: 'planned for your site.',
    description: 'IP surveillance and controlled entry systems designed around entrances, restricted areas, server rooms, workflows, and remote visibility.',
    highlights: [
      'High-resolution IP cameras, NVR/DVR & remote live viewing',
      'Biometric, facial recognition & RFID card access control',
      'Magnetic door locks, exit buttons & time-based permissions',
      'Coverage design, PoE switches & compliance setups'
    ],
    caption: 'CCTV & Biometric Access Control / 04',
    image: 'assets/images/service-security-v2.webp',
    imageAlt: 'Commercial CCTV surveillance and access control system'
  },
  {
    id: 'automation-smart',
    index: 5,
    number: '05',
    category: 'Smart Automation',
    eyebrow: '05 / 05 — Smart Automation & Controls',
    titleMain: 'Smart automation',
    titleSub: 'made practical.',
    description: 'Integrated lighting, climate, motorized blinds, security, and mobile controls for residences, executive offices, and connected commercial environments.',
    highlights: [
      'Smart architectural lighting & scene-based switching',
      'Automated climate, smart thermostats & motorized blinds',
      'Smart door locks & sensor-driven automation triggers',
      'Wall control panels & smartphone app synchronization'
    ],
    caption: 'Smart Home & Building Automation / 05',
    image: 'assets/images/service-automation-v2.webp',
    imageAlt: 'Smart home automation control panel and ambient lighting'
  }
];

export const allServicesCatalog = [
  {
    category: 'IT Support & Systems',
    code: 'A',
    title: 'IT AMC – Annual Maintenance Contract',
    shortDesc: 'Structured maintenance and support plans designed to reduce disruption and keep day-to-day IT operations reliable.',
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
    shortDesc: 'Clean Cat6/Cat6A cabling installations with project-specific testing for offices, commercial buildings, and retail spaces.',
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
      'Project-specific cable testing and performance reports',
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
    shortDesc: '3CX communication platforms offering softphones, video conferencing, live chat integration, and call queues.',
    items: [
      '3CX system deployment, on-premise or cloud hosted',
      'IP PBX setup and centralized extension management',
      'SIP trunk configuration with compatible local telecom services',
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
    shortDesc: 'High-definition IP surveillance with remote viewing, smart analytics, NVR storage, and system designs aligned with applicable project requirements.',
    items: [
      'Hikvision IP camera supply, installation, and maintenance',
      'Indoor dome, outdoor bullet, PTZ and turret cameras with ColorVu',
      'Network Video Recorder (NVR) configuration and storage sizing',
      'Digital Video Recorder (DVR) solutions where applicable',
      'Camera positioning, field-of-view, and blind-spot coverage planning',
      'PoE camera and PoE network switch configuration',
      'CCTV cabling, conduits, and weather-proof termination',
      'Secure remote viewing configuration on iOS, Android & PC',
      'Recording schedules, motion detection, and playback archiving',
      'CCTV system commissioning, testing, and project-specific compliance coordination',
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
      'Turnkey access control installation and system maintenance',
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
      'Bosch and JBL commercial sound and background music systems',
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
      'Planned email data migration from legacy servers with validation and backups',
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
      'Aruba Wi-Fi 6 wireless deployments and managed roaming',
      'Cisco enterprise managed core and PoE switches',
      'Ubiquiti UniFi switches, gateways, and Cloud Keys',
      'Fortinet FortiGate firewall security and threat protection',
      'DrayTek multi-WAN failover and site-to-site VPN setup',
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
  { name: 'Clinics & Healthcare Facilities', desc: 'Secure data handling, IP phones, surveillance, and infrastructure planned for continuity.' },
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
    desc: 'Coordinating equipment, structured cabling, rack dressing, and professional on-site installation.'
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
  { title: 'Reliability, Security & Performance', text: 'Business-grade components, redundancy planning, and project-specific testing.' },
  { title: 'Preventive Maintenance & Fast Support', text: 'Dedicated IT AMC packages designed to prevent issues before downtime occurs.' },
  { title: 'Support for New & Existing Systems', text: 'Expertise in fresh office fit-outs as well as auditing and rectifying legacy setups.' }
];

/**
 * =========================================================================
 * SOFTWARE ENGINEERING PRACTICE
 * A core Duotek capability presented alongside the 11 IT and ELV service lines.
 * =========================================================================
 */
export const digitalSolutionsPractice = [
  {
    id: 'software-dev',
    status: 'Core Software Engineering Practice',
    badge: 'Web • Mobile • Cloud',
    title: 'Custom Software & Digital Solutions',
    shortDesc: 'Custom web platforms, mobile applications, business automation, integrations, and cloud APIs designed around operational requirements.',
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
