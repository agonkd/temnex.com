<<<<<<< HEAD
import { FaBell, FaClipboardList, FaCreditCard, FaDatabase, FaKey, FaListAlt, FaShoppingCart, FaUser, FaUserAlt } from "react-icons/fa";
import { MdDashboardCustomize, MdKeyboardArrowDown, MdWork } from "react-icons/md";
import { TiWorld } from "react-icons/ti";
import { BiSolidMessageDetail } from "react-icons/bi";
=======
import { MdKeyboardArrowDown, MdRocketLaunch, MdSpaceDashboard } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { RiMessage3Fill, RiSettings5Fill, RiToolsFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BiSolidCreditCard, BiWorld } from "react-icons/bi";
import { PiFilesFill } from "react-icons/pi";
import { IoIosCart, IoMdListBox } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
>>>>>>> a171a4f (Dashboard)

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

<<<<<<< HEAD
=======
    //   sidebar items with icons
    sidebarItems: [
        { text: "Dashboard", icon: <MdSpaceDashboard />, href: "/dashboard" },
        { text: "Projects", icon: <AiFillProject />, href: "/dashboard/projects" },
        { text: "Messages", icon: <RiMessage3Fill />, href: "/dashboard/messages" },
        { text: "Profile", icon: <RiMessage3Fill />, href: "/dashboard/profile" },
        { text: "Settings", icon: <FaUser />, href: "/dashboard/settings" },
    ],

>>>>>>> a171a4f (Dashboard)
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
<<<<<<< HEAD
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
=======
    // Chart data and options
    chartOneData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Active Users',
                data: [12, 19, 3, 5, 2, 3, 7],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    },

    chartOneOptions: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            }
        }
    },

    chartTwoData: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Sales',
                data: [1500, 2000, 2500, 3000],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },

    chartTwoOptions: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: $${context.raw}`;
                    }
                }
            }
        }
    },

    // Tabs constants
    tabs: [
        {
            title: "Today's Money",
            content: '$53,000',
            change: 55,
            icon: <GrMoney />
        },
        {
            title: "Today's Users",
            content: '$2,300',
            change: 5,
            icon: <BiWorld />
        },
        {
            title: "Today's Money",
            content: '$3,462',
            change: -2,
            icon: <IoMdListBox />
        },
        {
            title: "Today's Money",
            content: '103,430',
            change: 5,
            icon: <IoIosCart />
        },
    ],

    graphTabs: [
        {
            title: "Users",
            icon: [<PiFilesFill />, 'purple'],
            content: '36K',
            progress: 55
        },
        {
            title: "Clicks",
            icon: [<MdRocketLaunch />, 'blue'],
            content: '2m',
            progress: 90
        },
        {
            title: "Sales",
            icon: [<BiSolidCreditCard />, 'orange'],
            content: '435$',
            progress: 30
        },
        {
            title: "Items",
            icon: [<RiToolsFill />, 'red'],
            content: '43',
            progress: 45
        },
    ],

    messages: [
        {
            id: 1,
            name: "John Doe",
            profile: "https://placehold.co/50x50",
            lastSeen: "2 minutes ago",
            messages: [
                "Hey, how are you?",
                "I'm good, thank you!",
                "What about you?",
                "I'm great, thanks!",
                "See you later!",
            ],
        },
        {
            id: 2,
            name: "Agon Kadriu",
            profile: "https://placehold.co/50x50",
            lastSeen: "51 minutes ago",
            messages: [
                "Hey, how are you?",
                "I'm good, thank you!",
                "What about you?",
                "I'm great, thanks!",
                "See you later!",
            ],
        },
        {
            id: 3,
            name: "Adrijan Koshi",
            profile: "https://placehold.co/50x50",
            lastSeen: "4 hours ago",
            messages: [
                "Hey, how are you?",
                "I'm good, thank you!",
                "What about you?",
                "I'm great, thanks!",
                "See you later!",
            ],
        },
    ],
>>>>>>> a171a4f (Dashboard)
};

export default constants;
