import { FaBell, FaClipboardList, FaCreditCard, FaDatabase, FaKey, FaListAlt, FaShoppingCart, FaUser, FaUserAlt } from "react-icons/fa";
import { MdDashboardCustomize, MdKeyboardArrowDown, MdWork } from "react-icons/md";
import { TiWorld } from "react-icons/ti";
import { BiSolidMessageDetail } from "react-icons/bi";

const constants = {
    navItems: [
        {
            text: "Home",
            href: "/",
            icon: <MdKeyboardArrowDown />,
            subItems: [
                { text: "Home 1", href: "/home" },
                { text: "Home 2", href: "/home-2" },
                { text: "Home 3", href: "/home-3" },
                { text: "Home 4", href: "/home-4" },
            ],
        },
        { text: "Browse Jobs", href: "/browse", icon: <MdKeyboardArrowDown /> },
        { text: "Users", href: "/users", icon: <MdKeyboardArrowDown /> },
        { text: "Pages", href: "/pages", icon: <MdKeyboardArrowDown /> },
        { text: "Contact", href: "/contact" },
    ],

    signupInputs: [
        {
            label: "Display name",
            type: "text",
            placeholder: "Display name",
        },
        {
            label: "Username",
            type: "text",
            placeholder: "Username",
        },
        {
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
        },
        {
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
        },
    ],
    loginInputs: [
        {
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
        },
        {
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
        },
    ],
    //   nav items and icons
    sidebarItems: [
        {
            label: "Dashboard",
            icon: <MdDashboardCustomize />,
            href: "/dashboard"
        },
        {
            label: "Projects",
            icon: <MdWork />,
            href: "/dashboard/projects"
        },
        {
            label: "Messages",
            icon: <BiSolidMessageDetail />,
            href: "/dashboard/messages"
        },
        {
            label: "Profile",
            icon: <FaUserAlt />,
            href: "/dashboard/account"
        },
    ],

    tinyCards: [
        {
            label: "Today's Money",
            value: "$53,000",
            change: 55,
            icon: <FaDatabase />
        },
        {
            label: "Today's Users",
            value: "2,300",
            change: 3,
            icon: <TiWorld />
        },
        {
            label: "New Clients",
            value: "+3,462",
            change: -2,
            icon: <FaListAlt />
        },
        {
            label: "Today's Money",
            value: "$103,430",
            change: 5,
            icon: <FaShoppingCart />
        },
    ],

    tableData: {
        columns: ['COMPANIES', 'MEMBERS', 'BUDGET', 'COMPLETION'],
        rows: [
            { 'COMPANIES': 'Company A', 'MEMBERS': 5, 'BUDGET': '$1000', 'COMPLETION': '80%' },
            { 'COMPANIES': 'Company B', 'MEMBERS': 3, 'BUDGET': '$1500', 'COMPLETION': '60%' },
            { 'COMPANIES': 'Company C', 'MEMBERS': 7, 'BUDGET': '$2000', 'COMPLETION': '90%' },
            { 'COMPANIES': 'Company D', 'MEMBERS': 4, 'BUDGET': '$800', 'COMPLETION': '70%' },
            { 'COMPANIES': 'Company D', 'MEMBERS': 4, 'BUDGET': '$800', 'COMPLETION': '70%' },
        ],
    },

    ordersOverview: [
        {
            icon: <FaBell color="green"></FaBell>,
            label: '$2400, Design changes',
            timestamp: 'EC 7:20 PM'
        },
        {
            icon: <FaClipboardList color="red"></FaClipboardList>,
            label: 'New order #1832412',
            timestamp: '21 DEC 11 PM'
        },
        {
            icon: <FaShoppingCart color="blue"></FaShoppingCart>,
            label: 'Server payments for April',
            timestamp: '21 DEC 9:34 PM'
        },
        {
            icon: <FaCreditCard color="orange"></FaCreditCard>,
            label: 'New card added for order #4395133',
            timestamp: '20 DEC 2:20 AM'
        },
        {
            icon: <FaKey color="purple"></FaKey>,
            label: 'Unlock packages for development',
            timestamp: '18 DEC 4:54 AM'
        },
        {
            icon: <FaDatabase color="black"></FaDatabase>,
            label: 'New order #9583120',
            timestamp: '17 DEC'
        },
    ],
    chats: [
        {
            id: 1,
            user: 'Agon Kadriu',
            lastSeen: '1 hour ago',
            messages: [
                { m_id: 1, sent_at: '3:14am', message: 'Hi' },
                { m_id: 2, sent_at: '3:19am', message: 'Oh, hi' },
                { m_id: 2, sent_at: '3:19am', message: 'How was your day?' },
                { m_id: 1, sent_at: '3:20am', message: 'Fine thanks, and yours?' },
                { m_id: 2, sent_at: '3:20am', message: 'Boring. I just got out of work!' },
                { m_id: 1, sent_at: '3:22am', message: 'Hm, coffee?' },
                { m_id: 1, sent_at: '3:14am', message: 'Hi' },
                { m_id: 2, sent_at: '3:19am', message: 'Oh, hi' },
                { m_id: 2, sent_at: '3:19am', message: 'How was your day?' },
                { m_id: 1, sent_at: '3:20am', message: 'Fine thanks, and yours?' },
                { m_id: 2, sent_at: '3:20am', message: 'Boring. I just got out of work!' },
                { m_id: 1, sent_at: '3:22am', message: 'Hm, coffee?' },
            ]
        },
        {
            id: 2,
            user: 'Adrijan Koshi',
            lastSeen: '21 minutes ago',
        },
        {
            id: 3,
            user: 'Isa Tashkerani',
            lastSeen: '4 hours ago',
        },
        {
            id: 3,
            user: 'Isa Tashkerani',
            lastSeen: '4 hours ago',
        },
        {
            id: 3,
            user: 'Isa Tashkerani',
            lastSeen: '4 hours ago',
        },
        {
            id: 3,
            user: 'Isa Tashkerani',
            lastSeen: '4 hours ago',
        },
        {
            id: 3,
            user: 'Isa Tashkerani',
            lastSeen: '4 hours ago',
        },
        {
            id: 3,
            user: 'Isa Tashkerani',
            lastSeen: '4 hours ago',
        },
        {
            id: 3,
            user: 'Isa Tashkerani',
            lastSeen: '4 hours ago',
        },
        {
            id: 3,
            user: 'Isa Tashkerani',
            lastSeen: '4 hours ago',
        },
    ]
};

export default constants;
