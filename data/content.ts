import {
    Zap, BarChart3, ShieldCheck, Cpu, Globe, RefreshCcw,
    Leaf, TrendingUp, AlertTriangle, Package, Workflow, BrainCircuit
} from 'lucide-react';

export const siteContent = {
    hero: {
        badge: "Now in General Availability",
        title: "Your Energy Supply Chain,",
        titleAccent: "Fully Autonomous.",
        subtitle: "Antova is the agentic AI platform built for energy managers. It orchestrates procurement, logistics, and supplier relationships — autonomously, at scale.",
        ctaPrimary: "Request a Demo",
        ctaSecondary: "See How It Works",
    },
    trustedBy: [
        "NovaPower Grid",
        "Helios Energy",
        "Meridian Utilities",
        "ClearPath LNG",
        "AtlasGrid",
        "TerraFuel Systems",
    ],
    stats: [
        { label: "Reduction in Procurement Costs", value: "32%", suffix: "" },
        { label: "Faster Supplier Onboarding", value: "10×", suffix: "" },
        { label: "Supply Disruptions Prevented", value: "94%", suffix: "" },
        { label: "Energy Companies Served", value: "150+", suffix: "" },
    ],
    features: [
        {
            icon: BrainCircuit,
            title: "Autonomous Procurement Agents",
            description: "AI agents that negotiate, approve, and execute purchase orders across your supplier network — without manual intervention.",
        },
        {
            icon: Globe,
            title: "Real-Time Supply Visibility",
            description: "Track every shipment of critical energy equipment, fuel components, and raw materials with live ETAs and exception alerts.",
        },
        {
            icon: AlertTriangle,
            title: "Proactive Risk Detection",
            description: "Continuously monitor geopolitical, weather, and supplier risks. Antova reroutes supply before disruptions impact operations.",
        },
        {
            icon: Leaf,
            title: "Carbon & Compliance Tracking",
            description: "Measure Scope 3 emissions across your supply chain and generate audit-ready sustainability reports automatically.",
        },
        {
            icon: TrendingUp,
            title: "Demand Forecasting",
            description: "AI-driven forecasting calibrated to energy load curves, seasonal demand, and grid expansion plans.",
        },
        {
            icon: Workflow,
            title: "Workflow Orchestration",
            description: "Connect ERP, SCADA, and procurement systems. Antova orchestrates cross-system workflows end-to-end.",
        },
    ],
    howItWorks: [
        {
            step: "01",
            title: "Connect Your Systems",
            description: "Integrate your ERP, procurement tools, and logistics data in minutes via pre-built connectors or REST APIs.",
        },
        {
            step: "02",
            title: "Deploy Agents",
            description: "Configure purpose-built agentic AI workflows for procurement, compliance, risk monitoring, and logistics.",
        },
        {
            step: "03",
            title: "Operate Autonomously",
            description: "Agents execute tasks, surface decisions that need human approval, and continuously improve from your feedback.",
        },
    ],
    useCases: [
        {
            icon: Zap,
            title: "Grid & Transmission",
            description: "Automate transformer procurement, cable supply, and substation equipment logistics for grid expansion projects.",
        },
        {
            icon: Package,
            title: "Oil & Gas",
            description: "Manage complex multi-tier supplier networks for upstream drilling equipment, pipeline materials, and OCTG.",
        },
        {
            icon: RefreshCcw,
            title: "Renewable Energy",
            description: "Orchestrate solar panel, wind turbine, and battery storage supply chains with precision delivery scheduling.",
        },
        {
            icon: BarChart3,
            title: "Utilities & Distribution",
            description: "Optimize spare parts inventory, maintenance materials, and emergency procurement for utility operations.",
        },
        {
            icon: ShieldCheck,
            title: "Nuclear & Power Generation",
            description: "Maintain stringent compliance and traceability for critical components with automated audit trails.",
        },
        {
            icon: Cpu,
            title: "Energy Transition",
            description: "Support decarbonization initiatives with supplier emissions data, green procurement scoring, and reporting.",
        },
    ],
    testimonials: [
        {
            quote: "Antova reduced our equipment procurement cycle from 6 weeks to 4 days. Our grid expansion project is 3 months ahead of schedule.",
            name: "Sarah Chen",
            title: "VP of Supply Chain, Helios Energy",
            initials: "SC",
        },
        {
            quote: "The risk detection is remarkable. Antova flagged a supplier insolvency risk two months before it became public — we had already diversified by then.",
            name: "Marcus Webb",
            title: "Chief Procurement Officer, NovaPower Grid",
            initials: "MW",
        },
        {
            quote: "We finally have Scope 3 visibility without a 6-person team maintaining spreadsheets. The compliance reports write themselves.",
            name: "Priya Nair",
            title: "Head of Sustainability, ClearPath LNG",
            initials: "PN",
        },
    ],
    platform: {
        title: "One Platform. Every Workflow.",
        description: "Antova unifies procurement, logistics, compliance, and supplier management under a single agentic AI layer.",
        features: [
            {
                title: "Agent Studio",
                description: "Build, configure, and deploy custom supply chain agents with a no-code workflow designer.",
                icon: BrainCircuit,
            },
            {
                title: "Supplier Intelligence",
                description: "Continuously scored supplier health, risk, and performance across your entire vendor network.",
                icon: BarChart3,
            },
            {
                title: "Command Center",
                description: "A single pane of glass for your entire supply chain — exceptions, KPIs, and agent actions in one view.",
                icon: Globe,
            },
            {
                title: "Compliance Engine",
                description: "Automated regulatory compliance for REACH, RoHS, CBAM, and ESG reporting requirements.",
                icon: ShieldCheck,
            },
        ],
    },
};

