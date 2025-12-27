// ADMIN DUMMY DATA AND STYLES

import { FiClock, FiTruck, FiCheckCircle } from 'react-icons/fi';

const statusStyles = {
    processing: {
        color: 'text-amber-400',
        bg: 'bg-amber-900/20',
        icon: <FiClock className="text-lg" />,
        label: 'Processing'
    },
    outForDelivery: {
        color: 'text-blue-400',
        bg: 'bg-blue-900/20',
        icon: <FiTruck className="text-lg" />,
        label: 'Out for Delivery'
    },
    delivered: {
        color: 'text-green-400',
        bg: 'bg-green-900/20',
        icon: <FiCheckCircle className="text-lg" />,
        label: 'Delivered'
    },
    pending: {
        color: 'text-yellow-400',
        bg: 'bg-yellow-900/20',
        icon: <FiClock className="text-lg" />,
        label: 'Payment Pending'
    },
    succeeded: {
        color: 'text-green-400',
        bg: 'bg-green-900/20',
        icon: <FiCheckCircle className="text-lg" />,
        label: 'Completed'
    }
};

const paymentMethodDetails = {
    cod: {
        label: 'COD',
        class: 'bg-yellow-600/30 text-yellow-300 border-yellow-500/50'
    },
    card: {
        label: 'Credit/Debit Card',
        class: 'bg-blue-600/30 text-blue-300 border-blue-500/50'
    },
    upi: {
        label: 'UPI Payment',
        class: 'bg-purple-600/30 text-purple-300 border-purple-500/50'
    },
    default: {
        label: 'Online',
        class: 'bg-green-600/30 text-green-400 border-green-500/50'
    }
};

const tableClasses = {
    wrapper: 'overflow-x-auto rounded-xl border border-amber-900/50',
    table: 'w-full text-left border-collapse',
    headerRow: 'bg-amber-900/30 border-b border-amber-900/50',
    headerCell: 'p-4 text-amber-400 font-semibold text-sm md:text-base',
    row: 'border-b border-amber-900/30 hover:bg-amber-900/20 transition-colors',
    cellBase: 'p-4 text-amber-100'
};

const layoutClasses = {
    page: 'min-h-screen bg-gradient-to-br from-[#1a0f05] via-[#2D1B0E] to-[#1a0f05] pt-8 pb-12 px-4',
    card: 'max-w-7xl mx-auto bg-gradient-to-br from-[#3a2b2b] to-[#2D1B0E] rounded-2xl border border-amber-900/40 p-8 shadow-2xl',
    heading: 'text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-8'
};

const iconMap = {
    'text-amber-400': <FiClock className="text-lg" />,
    'text-blue-400': <FiTruck className="text-lg" />,
    'text-green-400': <FiCheckCircle className="text-lg" />
};

const styles = {
    navWrapper: 'sticky top-0 z-50 bg-black border-b-2 border-amber-900/50',
    navContainer: 'max-w-7xl mx-auto px-4 py-4 flex justify-between items-center',
    logoSection: 'flex items-center gap-2 text-amber-400',
    logoIcon: 'text-3xl',
    logoText: 'text-xl font-bold text-amber-400',
    menuButton: 'lg:hidden text-amber-500 hover:text-amber-300 text-2xl',
    desktopMenu: 'hidden lg:flex items-center gap-4',
    mobileMenu: 'lg:hidden bg-black p-4 space-y-2',
    navLinkBase: 'flex items-center gap-2 px-4 py-2 rounded-lg text-amber-100 transition-colors',
    navLinkActive: 'bg-amber-900/30 text-amber-300',
    navLinkInactive: 'hover:bg-amber-900/20',
    
    // Form styles
    formWrapper: 'min-h-screen bg-gradient-to-br from-[#1a0f05] via-[#2D1B0E] to-[#1a0f05] p-6 md:p-8',
    formCard: 'bg-gradient-to-br from-[#3a2b2b] to-[#2D1B0E] rounded-2xl border border-amber-900/40 p-8 shadow-2xl',
    formTitle: 'text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-8',
    uploadWrapper: 'border-2 border-dashed border-amber-600/50 rounded-xl overflow-hidden bg-amber-900/10 max-w-sm mx-auto',
    uploadLabel: 'block cursor-pointer hover:bg-amber-900/20 transition-colors p-8',
    previewImage: 'w-full h-48 object-cover',
    uploadIcon: 'text-6xl text-amber-500 mx-auto',
    uploadText: 'text-amber-400 mt-3 text-lg text-center',
    label: 'block mb-2 text-lg text-amber-400 font-semibold',
    input: 'w-full bg-[#2D1B0E] border-2 border-amber-900/50 rounded-lg px-4 py-3 text-amber-100 placeholder-amber-400/50 focus:border-amber-500 focus:outline-none transition-colors',
    textarea: 'w-full bg-[#2D1B0E] border-2 border-amber-900/50 rounded-lg px-4 py-3 text-amber-100 placeholder-amber-400/50 focus:border-amber-500 focus:outline-none transition-colors resize-none',
    heartButton: 'flex items-center gap-3 px-6 py-3 bg-amber-900/20 border-2 border-amber-600/50 rounded-lg hover:bg-amber-900/40 transition-colors',
    heart: 'text-2xl text-amber-400 cursor-pointer',
    actionBtn: 'w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-lg transition-all duration-200 text-lg',
    
    // Page styles
    pageWrapper: 'min-h-screen bg-gradient-to-br from-[#1a0f05] via-[#2D1B0E] to-[#1a0f05] pt-8 pb-12 px-4',
    cardContainer: 'max-w-7xl mx-auto bg-gradient-to-br from-[#3a2b2b] to-[#2D1B0E] rounded-2xl border border-amber-900/40 p-8 shadow-2xl',
    title: 'text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-8',
    tableWrapper: 'overflow-x-auto rounded-xl border border-amber-900/50',
    table: 'w-full text-left border-collapse',
    thead: 'bg-amber-900/30 border-b border-amber-900/50',
    th: 'p-4 text-amber-400 font-semibold text-sm md:text-base',
    thCenter: 'p-4 text-amber-400 font-semibold text-center',
    tr: 'border-b border-amber-900/30 hover:bg-amber-900/20 transition-colors',
    imgCell: 'p-4',
    img: 'w-16 h-16 object-cover rounded-lg',
    nameCell: 'p-4',
    nameText: 'text-amber-100 font-semibold',
    descText: 'text-sm text-amber-400/70',
    categoryCell: 'p-4 text-amber-100',
    priceCell: 'p-4 text-amber-300 font-semibold',
    ratingCell: 'p-4',
    heartsCell: 'p-4',
    heartsWrapper: 'flex items-center gap-2 text-amber-400',
    deleteBtn: 'text-red-400 hover:text-red-300 transition-colors p-2 hover:bg-red-900/20 rounded-lg',
    emptyState: 'text-center py-12 text-amber-100/60 text-xl'
};

export { statusStyles, paymentMethodDetails, tableClasses, layoutClasses, iconMap, styles };
