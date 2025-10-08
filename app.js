// Enhanced Banking Platform Interactive Demo Application JavaScript
// Fixed real-time analytics dashboard visibility and functionality

class EnhancedBankingPlatformDemo {
    constructor() {
        this.currentSection = 'product-overview';
        this.currentMarketingTab = 'acquisition';
        this.currentBusinessUnit = 'sales';
        this.currentAnalyticsTab = 'data-collection';
        this.sessionData = {
            startTime: new Date(),
            messageCount: 0,
            interactions: 0,
            completedJourneys: 0,
            dataPoints: 0,
            customerProfile: {},
            behavioralTags: [],
            currentSegment: 'General Customer',
            engagementScore: 0,
            satisfactionScore: 0,
            completionRate: 0
        };
        
        // Banking use case data with proper contrast colors and analytics tracking
        this.bankingUseCases = {
            onboarding: {
                title: "Customer Onboarding",
                avatar: "👋",
                businessName: "Bank Assistant",
                metrics: { conversionRate: "85%", timeReduction: "67%", satisfactionScore: "4.6" },
                analyticsProfile: {
                    initialSegment: "New Customer Prospect",
                    targetSegment: "Onboarded Customer",
                    expectedCLV: 850,
                    conversionProbability: 85,
                    interactionValue: 120
                },
                conversation: [
                    {
                        type: "bot",
                        text: "Hello! Welcome to our bank. I'm here to help you open your account. May I have your full name please?",
                        options: ["John Smith", "Enter name manually", "Call me instead"],
                        analytics: {
                            dataPoints: ["Customer name", "Channel preference", "Initial intent"],
                            tags: ["New customer", "Digital onboarding"],
                            personalization: { tone: "Welcoming", focus: "Account benefits" }
                        }
                    },
                    {
                        type: "bot", 
                        text: "Great! What type of account would you like to open today?",
                        options: ["Savings Account", "Checking Account", "Business Account", "Student Account"],
                        analytics: {
                            dataPoints: ["Account type preference", "Financial needs"],
                            tags: ["Product interested", "Decision making"],
                            personalization: { tone: "Consultative", focus: "Product features" }
                        }
                    },
                    {
                        type: "bot",
                        text: "Perfect! I'll need to verify your identity. Can you please upload a photo of your government-issued ID?",
                        options: ["Upload Document", "Take Photo", "Visit Branch"],
                        analytics: {
                            dataPoints: ["Verification method", "Digital adoption level"],
                            tags: ["Identity verification", "Process engagement"],
                            personalization: { tone: "Professional", focus: "Security assurance" }
                        }
                    },
                    {
                        type: "bot",
                        text: "Thank you! Your documents are being processed. You'll receive your account details within 24 hours. Would you like to set up online banking now?",
                        options: ["Set Up Online Banking", "Order Debit Card", "Schedule Branch Visit", "That's all for now"],
                        analytics: {
                            dataPoints: ["Digital banking preference", "Additional services interest"],
                            tags: ["Onboarding completion", "Service adoption"],
                            personalization: { tone: "Supportive", focus: "Next steps guidance" }
                        }
                    }
                ]
            },
            reactivation: {
                title: "Customer Reactivation",
                avatar: "🔄", 
                businessName: "Access Bank",
                metrics: { reactivationRate: "28%", cac: "₦1,850", ltvUplift: "35%" },
                analyticsProfile: {
                    initialSegment: "Dormant Customer",
                    targetSegment: "Reactivated Customer",
                    expectedCLV: 1200,
                    conversionProbability: 28,
                    interactionValue: 180
                },
                conversation: [
                    {
                        type: "bot",
                        text: "Hi John! 👋 We noticed you haven't been active lately. We've got some exciting new features and benefits waiting for you!",
                        options: ["Tell me more", "Not interested", "Remove me from lists"],
                        analytics: {
                            dataPoints: ["Reactivation interest", "Communication preference"],
                            tags: ["Reactivation prospect", "Engagement level"],
                            personalization: { tone: "Friendly", focus: "Exclusive benefits" }
                        }
                    },
                    {
                        type: "bot",
                        text: "Great! Here are personalized benefits based on your profile: 💳 2% cashback on all purchases, 📱 Mobile banking rewards, 🎁 Exclusive VIP offers. Which interests you most?",
                        options: ["Cashback Details", "Mobile Rewards", "VIP Offers", "See All Benefits"],
                        analytics: {
                            dataPoints: ["Benefit preference", "Value proposition interest"],
                            tags: ["Benefit focused", "High value prospect"],
                            personalization: { tone: "Value-oriented", focus: "Personal benefits" }
                        }
                    },
                    {
                        type: "bot", 
                        text: "Excellent choice! Our new cashback program gives you 2% back on all purchases, 5% on groceries, and 10% on fuel. Plus bonus points for every transaction. Ready to reactivate?",
                        options: ["Yes, reactivate now", "Tell me about fees", "Speak to advisor", "Maybe later"],
                        analytics: {
                            dataPoints: ["Reactivation decision", "Additional information needs"],
                            tags: ["Ready to reactivate", "Value confirmed"],
                            personalization: { tone: "Encouraging", focus: "Immediate action" }
                        }
                    }
                ]
            },
            support: {
                title: "Customer Support",
                avatar: "🎧",
                businessName: "Bank Support",
                metrics: { resolutionRate: "78%", responseTime: "< 30 seconds", satisfactionScore: "4.4" },
                analyticsProfile: {
                    initialSegment: "Support User",
                    targetSegment: "Satisfied Customer",
                    expectedCLV: 950,
                    conversionProbability: 78,
                    interactionValue: 85
                },
                conversation: [
                    {
                        type: "bot",
                        text: "Hi! I'm your virtual banking assistant. How can I help you today?",
                        options: ["Check Balance", "Transaction History", "Card Issues", "Branch Locations"],
                        analytics: {
                            dataPoints: ["Support need", "Service type"],
                            tags: ["Support user", "Self-service capable"],
                            personalization: { tone: "Helpful", focus: "Quick resolution" }
                        }
                    },
                    {
                        type: "bot",
                        text: "I can help you with that. Please verify your identity using your account PIN or biometric authentication.",
                        options: ["Enter PIN", "Use Touch ID", "Use Face ID", "Security Questions"],
                        analytics: {
                            dataPoints: ["Authentication method", "Security comfort level"],
                            tags: ["Security conscious", "Tech adoption"],
                            personalization: { tone: "Secure", focus: "Identity protection" }
                        }
                    },
                    {
                        type: "bot",
                        text: "Authentication successful! Your current balance is $2,847.50. Recent transactions: • $45 - Grocery Store (Oct 5) • $120 - Gas Station (Oct 4) • $25 - Coffee Shop (Oct 3)",
                        options: ["View More Transactions", "Download Statement", "Set Up Alerts", "Transfer Money"],
                        analytics: {
                            dataPoints: ["Transaction patterns", "Additional service interest"],
                            tags: ["Frequent user", "Active account"],
                            personalization: { tone: "Informative", focus: "Additional services" }
                        }
                    }
                ]
            },
            fraud: {
                title: "Fraud Prevention", 
                avatar: "🛡️",
                businessName: "Security Alert",
                metrics: { fraudPrevention: "99.2%", falsePositives: "< 2%", responseTime: "< 5 seconds" },
                analyticsProfile: {
                    initialSegment: "At-Risk Customer",
                    targetSegment: "Protected Customer",
                    expectedCLV: 800,
                    conversionProbability: 95,
                    interactionValue: 200
                },
                conversation: [
                    {
                        type: "bot",
                        text: "🚨 SECURITY ALERT: We detected unusual activity on your account. A purchase of $1,200 at Electronics Store in Miami, FL. Did you authorize this transaction?",
                        options: ["Yes, it was me", "No, it's fraud", "I'm not sure"],
                        analytics: {
                            dataPoints: ["Fraud confirmation", "Transaction awareness"],
                            tags: ["Security alert", "Fraud victim"],
                            personalization: { tone: "Urgent", focus: "Account protection" }
                        }
                    },
                    {
                        type: "bot",
                        text: "Thank you for confirming this is fraud. I've immediately blocked your card and initiated a dispute. For security, I need to verify your identity. Can you provide the last 4 digits of your SSN?",
                        options: ["Enter SSN", "Call me instead", "Visit branch", "Use biometrics"],
                        analytics: {
                            dataPoints: ["Identity verification method", "Communication preference"],
                            tags: ["Identity verification", "Fraud protection"],
                            personalization: { tone: "Protective", focus: "Security measures" }
                        }
                    },
                    {
                        type: "bot",
                        text: "Identity verified. Your card is blocked and a new one will arrive in 2-3 business days. The fraudulent charge has been reversed. We've also enabled additional security monitoring.",
                        options: ["Security tips", "Temporary card", "Track new card", "Nothing else"],
                        analytics: {
                            dataPoints: ["Additional security interest", "Follow-up needs"],
                            tags: ["Fraud resolved", "Security conscious"],
                            personalization: { tone: "Reassuring", focus: "Prevention education" }
                        }
                    }
                ]
            },
            loans: {
                title: "Loan Services",
                avatar: "🏠",
                businessName: "Loan Department", 
                metrics: { approvalTime: "< 2 hours", applicationRate: "92%", satisfactionScore: "4.5" },
                analyticsProfile: {
                    initialSegment: "Loan Prospect",
                    targetSegment: "Loan Customer",
                    expectedCLV: 1500,
                    conversionProbability: 65,
                    interactionValue: 350
                },
                conversation: [
                    {
                        type: "bot",
                        text: "Hello! I can help you with personal loans, auto loans, or home mortgages. What type of loan are you interested in?",
                        options: ["Personal Loan", "Auto Loan", "Home Mortgage", "Business Loan"],
                        analytics: {
                            dataPoints: ["Loan type interest", "Financial goals"],
                            tags: ["Loan prospect", "Financial planning"],
                            personalization: { tone: "Professional", focus: "Loan options" }
                        }
                    },
                    {
                        type: "bot",
                        text: "Great! For a personal loan, I'll need some information. What's the loan amount you need?",
                        options: ["$5,000 - $15,000", "$15,000 - $30,000", "$30,000 - $50,000", "Custom amount"],
                        analytics: {
                            dataPoints: ["Loan amount range", "Financial capacity"],
                            tags: ["Loan amount qualified", "Credit assessment"],
                            personalization: { tone: "Consultative", focus: "Loan qualification" }
                        }
                    },
                    {
                        type: "bot",
                        text: "Based on your credit score of 740 and income, you qualify for up to $35,000 at 5.9% APR. Monthly payment would be approximately $336 for 60 months. Would you like to proceed?",
                        options: ["Yes, apply now", "See other options", "Calculate different terms", "Speak to advisor"],
                        analytics: {
                            dataPoints: ["Loan qualification", "Rate acceptance", "Application readiness"],
                            tags: ["Pre-qualified", "Rate sensitive"],
                            personalization: { tone: "Confident", focus: "Loan approval" }
                        }
                    }
                ]
            },
            payments: {
                title: "Payment Services",
                avatar: "💸",
                businessName: "Payment Center",
                metrics: { transactionSuccess: "99.8%", averageTime: "< 15 seconds", dailyVolume: "$2.3M" },
                analyticsProfile: {
                    initialSegment: "Transactional User",
                    targetSegment: "Active Payment User",
                    expectedCLV: 750,
                    conversionProbability: 90,
                    interactionValue: 50
                },
                conversation: [
                    {
                        type: "bot", 
                        text: "I can help you send money, pay bills, or set up automatic payments. What would you like to do?",
                        options: ["Send Money", "Pay Bills", "Auto-Pay Setup", "Payment History"],
                        analytics: {
                            dataPoints: ["Payment service type", "Transaction frequency"],
                            tags: ["Payment user", "Service adoption"],
                            personalization: { tone: "Efficient", focus: "Quick transactions" }
                        }
                    },
                    {
                        type: "bot",
                        text: "Who would you like to send money to?",
                        options: ["Enter phone number", "Select from contacts", "Enter email", "Scan QR code"],
                        analytics: {
                            dataPoints: ["Recipient method", "Contact management"],
                            tags: ["Frequent sender", "Contact organized"],
                            personalization: { tone: "Practical", focus: "Easy transfers" }
                        }
                    },
                    {
                        type: "bot",
                        text: "Sending $250 to John Doe (+1-555-0123). Please confirm: • From: Checking (...4567) • To: John Doe • Amount: $250.00 • Fee: $0.00",
                        options: ["Confirm & Send", "Change amount", "Add message", "Cancel"],
                        analytics: {
                            dataPoints: ["Transaction confirmation", "Additional features usage"],
                            tags: ["Transaction ready", "Fee conscious"],
                            personalization: { tone: "Clear", focus: "Transaction completion" }
                        }
                    }
                ]
            }
        };

        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupBankingChatbots();
        this.setupMarketingSolutions();
        this.setupCustomerSupport();
        this.setupBusinessUnits();
        this.setupImplementationRoadmap();
        this.setupROICalculator();
        this.calculateBankingROI();
        this.applyContrastFixes();
    }

    // Apply contrast fixes to ensure proper text visibility
    applyContrastFixes() {
        // Ensure WhatsApp chat messages have proper contrast
        this.ensureWhatsAppContrast();
        
        // Ensure buttons have proper contrast
        this.ensureButtonContrast();
        
        // Ensure navigation has proper contrast
        this.ensureNavigationContrast();
    }

    ensureWhatsAppContrast() {
        // This will be applied when WhatsApp messages are created
        const chatStyles = `
            .chat-message.incoming * {
                color: #0C1B2C !important;
            }
            .chat-message.outgoing * {
                color: #FFFFFF !important;
            }
            .response-btn {
                background: #25D366 !important;
                color: #FFFFFF !important;
            }
            .response-btn:hover {
                background: #20B954 !important;
                color: #FFFFFF !important;
            }
        `;
        
        if (!document.getElementById('whatsapp-contrast-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'whatsapp-contrast-styles';
            styleSheet.textContent = chatStyles;
            document.head.appendChild(styleSheet);
        }
    }

    ensureButtonContrast() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            if (button.classList.contains('btn--primary')) {
                button.style.backgroundColor = '#FC6323';
                button.style.color = '#FFFFFF';
            } else if (button.classList.contains('btn--secondary')) {
                button.style.backgroundColor = '#0C1B2C';
                button.style.color = '#FFFFFF';
            } else if (button.classList.contains('btn--outline')) {
                button.style.borderColor = '#0C1B2C';
                button.style.color = '#0C1B2C';
            }
        });
    }

    ensureNavigationContrast() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.classList.contains('active')) {
                link.style.backgroundColor = '#FC6323';
                link.style.color = '#FFFFFF';
            } else {
                link.style.color = '#0C1B2C';
            }
        });
    }

    // Navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.showSection(section);
            });
        });
    }

    showSection(sectionId) {
        // Update navigation with proper contrast
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            link.style.backgroundColor = '';
            link.style.color = '#0C1B2C';
        });
        const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            activeLink.style.backgroundColor = '#FC6323';
            activeLink.style.color = '#FFFFFF';
        }

        // Update sections
        document.querySelectorAll('.app-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId)?.classList.add('active');

        this.currentSection = sectionId;

        // Initialize section-specific functionality
        if (sectionId === 'marketing') {
            this.initializeMarketingChart();
        } else if (sectionId === 'roi-calculator') {
            this.calculateBankingROI();
        }

        // Re-apply contrast fixes after section change
        setTimeout(() => this.applyContrastFixes(), 100);
    }

    // Marketing Solutions
    setupMarketingSolutions() {
        // Marketing solution tabs will be handled by onclick events
    }

    switchMarketingTab(tabId) {
        this.currentMarketingTab = tabId;
        
        // Update tab buttons with proper contrast
        document.querySelectorAll('.solution-tab').forEach(btn => {
            btn.classList.remove('active');
            btn.style.color = '#6C757D';
            btn.style.borderBottomColor = 'transparent';
        });
        const activeTabBtn = document.querySelector(`.solution-tab[onclick*="${tabId}"]`);
        if (activeTabBtn) {
            activeTabBtn.classList.add('active');
            activeTabBtn.style.color = '#FC6323';
            activeTabBtn.style.borderBottomColor = '#FC6323';
        }

        // Update tab content
        document.querySelectorAll('.solution-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(tabId)?.classList.add('active');

        // Initialize chart if analytics tab
        if (tabId === 'analytics') {
            setTimeout(() => this.initializeMarketingChart(), 100);
        }
    }

    loadCampaignTemplate(templateId) {
        const flowPreview = document.getElementById('campaign-flow');
        if (!flowPreview) return;

        const templates = {
            welcome: [
                { icon: '🎯', title: 'Trigger: New Customer', desc: 'When account is opened' },
                { icon: '👋', title: 'Welcome Message', desc: 'Personalized greeting via WhatsApp' },
                { icon: '📱', title: 'App Setup Guide', desc: 'Mobile banking tutorial' },
                { icon: '🎁', title: 'Welcome Bonus', desc: 'First transaction reward' }
            ],
            promotion: [
                { icon: '🎯', title: 'Trigger: Segment Match', desc: 'High-value customer identified' },
                { icon: '🎉', title: 'Promotional Offer', desc: 'Exclusive rate or cashback' },
                { icon: '⏰', title: 'Limited Time', desc: '48-hour offer window' },
                { icon: '✅', title: 'Conversion Track', desc: 'Monitor uptake and ROI' }
            ],
            reactivation: [
                { icon: '🎯', title: 'Trigger: Dormant Account', desc: '90 days of inactivity' },
                { icon: '💡', title: 'Personalized Message', desc: 'Account-specific benefits' },
                { icon: '🔄', title: 'Re-engagement', desc: 'Easy activation process' },
                { icon: '📈', title: 'Success Tracking', desc: 'Monitor reactivation rate' }
            ]
        };

        const template = templates[templateId];
        if (template) {
            flowPreview.innerHTML = template.map((step, index) => `
                <div class="flow-step">
                    <div class="step-icon" style="background: #FC6323; color: #FFFFFF;">${step.icon}</div>
                    <div class="step-content">
                        <h6 style="color: #0C1B2C;">${step.title}</h6>
                        <p style="color: #343A40;">${step.desc}</p>
                    </div>
                </div>
                ${index < template.length - 1 ? '<div class="flow-arrow" style="color: #FC6323;">↓</div>' : ''}
            `).join('');
            
            this.showNotification(`${templateId.replace('-', ' ')} campaign template loaded! 🎯`);
        }
    }

    initializeMarketingChart() {
        const ctx = document.getElementById('marketingChart');
        if (!ctx) return;

        // Destroy existing chart if it exists
        if (this.marketingChart) {
            this.marketingChart.destroy();
        }

        this.marketingChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Open Rate',
                        data: [65, 68, 70, 68],
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Click Rate',
                        data: [20, 22, 24, 24],
                        borderColor: '#FC6323',
                        backgroundColor: 'rgba(252, 99, 35, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Conversion Rate',
                        data: [8, 10, 12, 12.5],
                        borderColor: '#5D878F',
                        backgroundColor: 'rgba(93, 135, 143, 0.1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#0C1B2C'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#0C1B2C'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#0C1B2C',
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Customer Support
    setupCustomerSupport() {
        this.setupSupportConversations();
    }

    setupSupportConversations() {
        const conversations = {
            conv1: {
                customer: 'John Smith',
                context: 'Premium Account • $2,847 balance • Last active: 2h ago',
                messages: [
                    { type: 'customer', text: "Hi, I need to check my account balance. The mobile app isn't loading properly.", time: '14:23' },
                    { type: 'agent', text: 'I can help you with that right away! Let me pull up your account details. Your current balance is $2,847.50. Regarding the app issue, are you getting any specific error messages?', time: '14:24' }
                ]
            },
            conv2: {
                customer: 'Mary Davis',
                context: 'Premium Account • $5,200 balance • Last active: 1d ago',
                messages: [
                    { type: 'customer', text: "I need a replacement card. My current one was damaged.", time: '14:18' },
                    { type: 'agent', text: 'I can definitely help you with a card replacement. I\'ve ordered a new card which will arrive in 3-5 business days. In the meantime, would you like me to set up temporary digital wallet access?', time: '14:19' }
                ]
            },
            conv3: {
                customer: 'David Wilson',
                context: 'Standard Account • $890 balance • Last active: 3h ago',
                messages: [
                    { type: 'customer', text: "I see a charge I don't recognize on my statement. Can you help me dispute it?", time: '14:15' },
                    { type: 'agent', text: 'I can help you with that transaction dispute. I\'ve pulled up your recent transactions and can see the charge you\'re referring to. Let me initiate the dispute process and provide you with a reference number.', time: '14:16' }
                ]
            }
        };

        this.supportConversations = conversations;
    }

    selectSupportConversation(conversationId) {
        const conversation = this.supportConversations[conversationId];
        if (!conversation) return;

        // Update active conversation with proper contrast
        document.querySelectorAll('.conversation-item').forEach(item => {
            item.classList.remove('active');
            item.style.backgroundColor = '';
            item.style.borderColor = '';
            // Reset text colors
            const convName = item.querySelector('.conv-name');
            const convMessage = item.querySelector('.conv-message');
            const convTime = item.querySelector('.conv-time');
            if (convName) convName.style.color = '#0C1B2C';
            if (convMessage) convMessage.style.color = '#343A40';
            if (convTime) convTime.style.color = '#343A40';
        });
        
        const activeItem = document.querySelector(`[onclick*="${conversationId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
            activeItem.style.backgroundColor = '#FC6323';
            activeItem.style.borderColor = '#FC6323';
            // Set white text for active item
            const convName = activeItem.querySelector('.conv-name');
            const convMessage = activeItem.querySelector('.conv-message');
            const convTime = activeItem.querySelector('.conv-time');
            if (convName) convName.style.color = '#FFFFFF';
            if (convMessage) convMessage.style.color = '#FFFFFF';
            if (convTime) convTime.style.color = '#FFFFFF';
        }

        // Update customer info
        const customerNameEl = document.getElementById('selected-customer');
        const customerContextEl = document.querySelector('.customer-context span');
        
        if (customerNameEl) {
            customerNameEl.textContent = conversation.customer;
            customerNameEl.style.color = '#0C1B2C';
        }
        if (customerContextEl) {
            customerContextEl.textContent = conversation.context;
            customerContextEl.style.color = '#343A40';
        }

        // Update messages with proper contrast
        const messagesContainer = document.getElementById('support-messages');
        if (messagesContainer) {
            messagesContainer.innerHTML = conversation.messages.map(message => `
                <div class="message ${message.type}">
                    <div class="message-content" style="background: ${message.type === 'customer' ? '#FC6323' : '#F8F9FA'}; color: ${message.type === 'customer' ? '#FFFFFF' : '#0C1B2C'};">
                        <div class="message-text" style="color: ${message.type === 'customer' ? '#FFFFFF' : '#0C1B2C'};">${message.text}</div>
                        <div class="message-time" style="color: ${message.type === 'customer' ? 'rgba(255, 255, 255, 0.8)' : '#343A40'};">${message.time}</div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Business Units
    setupBusinessUnits() {
        // Business unit expansion will be handled by onclick events
    }

    expandBusinessUnit(unitId) {
        this.currentBusinessUnit = unitId;
        
        // Update active card
        document.querySelectorAll('.unit-card').forEach(card => {
            card.classList.remove('active');
        });
        document.querySelector(`.unit-card[onclick*="${unitId}"]`)?.classList.add('active');

        // Update details
        document.querySelectorAll('.unit-detail').forEach(detail => {
            detail.classList.remove('active');
        });
        document.getElementById(`${unitId}-details`)?.classList.add('active');

        this.showNotification(`${unitId.replace('-', ' ')} department details loaded! 💼`);
    }

    // Implementation Roadmap
    setupImplementationRoadmap() {
        // Phase expansion will be handled by onclick events
    }

    togglePhase(phaseNumber) {
        const phaseItem = document.querySelector(`.phase-item[data-phase="${phaseNumber}"]`);
        if (!phaseItem) return;

        const isExpanded = phaseItem.classList.contains('expanded');
        
        if (isExpanded) {
            phaseItem.classList.remove('expanded');
            phaseItem.querySelector('.phase-toggle').textContent = '+';
        } else {
            phaseItem.classList.add('expanded');
            phaseItem.querySelector('.phase-toggle').textContent = '−';
        }
    }

    expandAllPhases() {
        const phaseItems = document.querySelectorAll('.phase-item');
        phaseItems.forEach((item, index) => {
            item.classList.add('expanded');
            item.querySelector('.phase-toggle').textContent = '−';
        });
        this.showNotification('All implementation phases expanded! 📋');
    }

    downloadRoadmap() {
        this.showNotification('Implementation roadmap downloaded! 📄');
    }

    startImplementation() {
        this.showNotification('Implementation process initiated! 🚀 Our team will contact you within 24 hours.');
    }

    customizeRoadmap() {
        this.showNotification('Roadmap customization wizard opening... ⚙️');
    }

    scheduleConsultation() {
        this.showNotification('Consultation scheduled! 📅 You will receive a calendar invite shortly.');
    }

    // Banking Chatbots with Real-Time Analytics
    setupBankingChatbots() {
        // Banking chatbot setup is handled by onclick events in HTML
    }

    startBankingDemo(useCaseId) {
        const useCase = this.bankingUseCases[useCaseId];
        if (!useCase) return;

        // Reset session data for new demo
        this.sessionData = {
            startTime: new Date(),
            messageCount: 0,
            interactions: 0,
            completedJourneys: 0,
            dataPoints: 3, // Start with some initial data points
            customerProfile: {
                'Channel preference': 'WhatsApp',
                'Initial intent': 'Account opening',
                'Interaction time': new Date().toLocaleTimeString()
            },
            behavioralTags: ['Digital user', 'Self-service'],
            currentSegment: useCase.analyticsProfile.initialSegment,
            engagementScore: 25,
            satisfactionScore: 0,
            completionRate: 0,
            currentUseCase: useCase
        };

        const modal = document.getElementById('banking-demo-modal');
        const modalTitle = document.getElementById('banking-modal-title');
        const demoAvatar = document.getElementById('demo-avatar');
        const demoBusinessName = document.getElementById('demo-business-name');

        if (modalTitle) {
            modalTitle.textContent = `${useCase.title} Demo with Real-Time Analytics`;
            modalTitle.style.color = '#FFFFFF';
        }
        if (demoAvatar) demoAvatar.textContent = useCase.avatar;
        if (demoBusinessName) {
            demoBusinessName.textContent = useCase.businessName;
            demoBusinessName.style.color = '#FFFFFF';
        }

        // Clear chat and analytics
        const chatMessages = document.getElementById('banking-chat-messages');
        if (chatMessages) {
            chatMessages.innerHTML = '';
        }

        // Initialize analytics dashboard - CRITICAL FIX
        setTimeout(() => {
            this.initializeAnalyticsDashboard();
        }, 100);

        modal?.classList.remove('hidden');

        // Start conversation
        setTimeout(() => {
            this.runBankingConversation(useCase.conversation, 0);
        }, 500);
    }

    initializeAnalyticsDashboard() {
        // Ensure the analytics dashboard is visible and properly initialized
        console.log('Initializing analytics dashboard...');
        
        // Force display of analytics dashboard section
        const analyticsSection = document.querySelector('.analytics-dashboard-section');
        if (analyticsSection) {
            analyticsSection.style.display = 'block';
            console.log('Analytics dashboard section made visible');
        }

        // Reset and update all analytics displays
        this.updateDataPoints();
        this.updateCustomerProfile();
        this.updateBehavioralTags();
        this.updateEngagementMetrics();
        this.updateSegmentation();
        this.updatePersonalization();
        this.updateFuturePlanning();

        // Ensure the default tab is active
        this.switchAnalyticsTab('data-collection');
        
        console.log('Analytics dashboard initialized successfully');
    }

    runBankingConversation(conversation, currentStep) {
        if (currentStep >= conversation.length) {
            this.sessionData.completionRate = 100;
            this.sessionData.satisfactionScore = 4.8;
            this.sessionData.currentSegment = this.sessionData.currentUseCase?.analyticsProfile.targetSegment || 'Completed Customer';
            this.updateEngagementMetrics();
            this.updateSegmentation();
            this.updateFuturePlanning();
            return;
        }

        const message = conversation[currentStep];
        const chatMessages = document.getElementById('banking-chat-messages');
        
        // Add bot message with proper WhatsApp styling and contrast
        const messageEl = document.createElement('div');
        messageEl.className = 'chat-message incoming';
        messageEl.style.cssText = `
            background: #FFFFFF !important;
            padding: 12px;
            border-radius: 16px;
            margin-bottom: 8px;
            max-width: 80%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        `;
        messageEl.innerHTML = `
            <div style="font-size: 14px; color: #0C1B2C !important; line-height: 1.4; margin-bottom: 4px;">${message.text}</div>
            <div style="font-size: 11px; color: #343A40 !important; text-align: right;">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        `;

        chatMessages?.appendChild(messageEl);
        chatMessages?.scrollTo(0, chatMessages.scrollHeight);

        // Update analytics based on message
        this.sessionData.messageCount++;
        this.updateAnalyticsFromMessage(message, currentStep);

        // Add response options
        if (message.options) {
            setTimeout(() => {
                this.addBankingResponseOptions(message.options, () => {
                    setTimeout(() => {
                        this.runBankingConversation(conversation, currentStep + 1);
                    }, 1000);
                });
            }, 1000);
        } else {
            setTimeout(() => {
                this.runBankingConversation(conversation, currentStep + 1);
            }, 2000);
        }
    }

    updateAnalyticsFromMessage(message, step) {
        // Update data points
        if (message.analytics) {
            this.sessionData.dataPoints += message.analytics.dataPoints.length;
            
            // Update customer profile
            message.analytics.dataPoints.forEach(dataPoint => {
                this.sessionData.customerProfile[dataPoint] = 'Collected';
            });

            // Add behavioral tags
            message.analytics.tags.forEach(tag => {
                if (!this.sessionData.behavioralTags.includes(tag)) {
                    this.sessionData.behavioralTags.push(tag);
                }
            });

            // Update engagement score based on progress
            this.sessionData.engagementScore = Math.min(100, 25 + (step * 20));
            this.sessionData.completionRate = Math.min(100, ((step + 1) / 4) * 100);
        }

        // Update analytics displays with animation
        setTimeout(() => {
            this.updateDataPoints();
            this.updateCustomerProfile();
            this.updateBehavioralTags();
            this.updateEngagementMetrics();
            this.updateSegmentation();
            this.updatePersonalization();
            this.updateFuturePlanning();
        }, 200);
    }

    updateDataPoints() {
        const dataPointsCount = document.getElementById('data-points-count');
        const interactionsCount = document.getElementById('interactions-count');
        
        if (dataPointsCount) {
            dataPointsCount.textContent = this.sessionData.dataPoints;
            dataPointsCount.style.color = '#FC6323';
        }
        if (interactionsCount) {
            interactionsCount.textContent = this.sessionData.messageCount;
            interactionsCount.style.color = '#FC6323';
        }
    }

    updateCustomerProfile() {
        const customerNameData = document.getElementById('customer-name-data');
        const accountTypeData = document.getElementById('account-type-data');
        const channelData = document.getElementById('channel-data');
        const responseTimeData = document.getElementById('response-time-data');
        
        if (customerNameData) {
            customerNameData.textContent = this.sessionData.customerProfile['Customer name'] || 'Not collected';
            customerNameData.style.color = '#0C1B2C';
        }
        if (accountTypeData) {
            accountTypeData.textContent = this.sessionData.customerProfile['Account type preference'] || 'Not collected';
            accountTypeData.style.color = '#0C1B2C';
        }
        if (channelData) {
            channelData.textContent = 'WhatsApp';
            channelData.style.color = '#0C1B2C';
        }
        if (responseTimeData) {
            responseTimeData.textContent = '< 5 seconds';
            responseTimeData.style.color = '#0C1B2C';
        }
    }

    updateBehavioralTags() {
        const tagsContainer = document.getElementById('behavioral-tags');
        if (!tagsContainer) return;

        tagsContainer.innerHTML = '';
        this.sessionData.behavioralTags.forEach((tag, index) => {
            setTimeout(() => {
                const tagEl = document.createElement('span');
                tagEl.className = 'behavior-tag new';
                tagEl.textContent = tag;
                tagEl.style.cssText = `
                    background: #FC6323 !important;
                    color: #FFFFFF !important;
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: 500;
                    margin: 2px;
                    display: inline-block;
                `;
                tagsContainer.appendChild(tagEl);
            }, index * 200); // Stagger the appearance
        });
    }

    updateEngagementMetrics() {
        const engagementScore = document.getElementById('engagement-score');
        const satisfactionScore = document.getElementById('satisfaction-score');
        const completionRate = document.getElementById('completion-rate');
        
        if (engagementScore) {
            engagementScore.textContent = this.sessionData.engagementScore + '%';
            engagementScore.style.color = '#FC6323';
        }
        if (satisfactionScore) {
            const score = this.sessionData.satisfactionScore || (this.sessionData.engagementScore > 50 ? '4.2' : '--');
            satisfactionScore.textContent = score;
            satisfactionScore.style.color = '#FC6323';
        }
        if (completionRate) {
            completionRate.textContent = Math.round(this.sessionData.completionRate) + '%';
            completionRate.style.color = '#FC6323';
        }
    }

    updateSegmentation() {
        const currentSegment = document.getElementById('current-segment');
        const segmentCharacteristics = document.getElementById('segment-characteristics');
        const segmentRecommendations = document.getElementById('segment-recommendations');

        if (currentSegment) {
            if (this.sessionData.completionRate > 75) {
                const targetSegment = this.sessionData.currentUseCase?.analyticsProfile.targetSegment || 'Active Customer';
                currentSegment.textContent = targetSegment;
                this.sessionData.currentSegment = targetSegment;
            } else if (this.sessionData.completionRate > 25) {
                currentSegment.textContent = 'Engaged Prospect';
                this.sessionData.currentSegment = 'Engaged Prospect';
            } else {
                currentSegment.textContent = this.sessionData.currentSegment;
            }
            currentSegment.style.color = '#FFFFFF';
            currentSegment.style.background = '#FC6323';
            currentSegment.style.padding = '4px 8px';
            currentSegment.style.borderRadius = '4px';
        }

        if (segmentCharacteristics) {
            const characteristics = [
                'Digital channel preference',
                'Self-service capable', 
                'Responsive to automation',
                `${this.sessionData.engagementScore}% engagement score`
            ];
            segmentCharacteristics.innerHTML = characteristics.map(char => 
                `<div class="characteristic-item" style="color: #0C1B2C; background: #F8F9FA; padding: 8px; border-radius: 4px; border: 1px solid #E1E5E9; margin-bottom: 4px;">${char}</div>`
            ).join('');
        }

        if (segmentRecommendations) {
            const recommendations = [
                'Digital-first communication',
                'Automated service flows',
                'Personalized product offers',
                'Proactive engagement'
            ];
            segmentRecommendations.innerHTML = recommendations.map(rec => 
                `<div class="recommendation-item" style="color: #0C1B2C; background: #F8F9FA; padding: 8px; border-radius: 4px; border: 1px solid #E1E5E9; margin-bottom: 4px;">${rec}</div>`
            ).join('');
        }
    }

    updatePersonalization() {
        const toneOptimization = document.getElementById('tone-optimization');
        const contentFocus = document.getElementById('content-focus');
        const urgencyLevel = document.getElementById('urgency-level');
        const productRecs = document.getElementById('product-recommendations');

        if (toneOptimization) {
            toneOptimization.textContent = 'Professional & Friendly';
            toneOptimization.style.color = '#0C1B2C';
        }
        if (contentFocus) {
            contentFocus.textContent = 'Benefits & Features';
            contentFocus.style.color = '#0C1B2C';
        }
        if (urgencyLevel) {
            urgencyLevel.textContent = 'Medium';
            urgencyLevel.style.color = '#0C1B2C';
        }

        if (productRecs) {
            const recommendations = [
                'Premium Checking Account - 92% match',
                'Mobile Banking App - 87% match',
                'Cashback Credit Card - 78% match'
            ];
            productRecs.innerHTML = recommendations.map(rec => 
                `<div class="product-rec" style="color: #0C1B2C; background: #F8F9FA; padding: 8px; border-radius: 4px; border: 1px solid #E1E5E9; margin-bottom: 4px;">${rec}</div>`
            ).join('');
        }
    }

    updateFuturePlanning() {
        const nextActions = document.getElementById('next-actions');
        const crossSellOps = document.getElementById('cross-sell-opportunities');
        const estimatedCLV = document.getElementById('estimated-clv');
        const conversionProbability = document.getElementById('conversion-probability');
        const interactionValue = document.getElementById('interaction-value');

        if (nextActions) {
            const actions = [
                {
                    icon: '📧',
                    title: 'Follow-up Email',
                    desc: 'Send personalized follow-up in 24 hours',
                    confidence: '87%'
                },
                {
                    icon: '📱',
                    title: 'App Onboarding',
                    desc: 'Guide through mobile banking setup',
                    confidence: '92%'
                }
            ];

            nextActions.innerHTML = actions.map(action => `
                <div class="action-item" style="background: #F8F9FA; padding: 12px; border-radius: 8px; border: 1px solid #E1E5E9; margin-bottom: 8px; display: flex; align-items: flex-start; gap: 12px;">
                    <div class="action-icon" style="font-size: 18px; margin-top: 2px;">${action.icon}</div>
                    <div class="action-content" style="flex: 1;">
                        <div class="action-title" style="color: #0C1B2C; font-weight: 500; margin-bottom: 4px;">${action.title}</div>
                        <div class="action-desc" style="color: #343A40; font-size: 12px; margin-bottom: 4px;">${action.desc}</div>
                        <div class="action-confidence" style="color: #28A745; font-size: 12px; font-weight: 500;">Confidence: ${action.confidence}</div>
                    </div>
                </div>
            `).join('');
        }

        if (crossSellOps) {
            const opportunities = [
                'Premium account upgrade - High likelihood',
                'Credit card application - Medium likelihood',
                'Investment services - Low likelihood'
            ];
            crossSellOps.innerHTML = opportunities.map(opp => 
                `<div class="opportunity-item" style="color: #0C1B2C; background: #F8F9FA; padding: 8px; border-radius: 4px; border: 1px solid #E1E5E9; margin-bottom: 4px;">${opp}</div>`
            ).join('');
        }

        if (this.sessionData.currentUseCase) {
            const profile = this.sessionData.currentUseCase.analyticsProfile;
            if (estimatedCLV) {
                estimatedCLV.textContent = '$' + profile.expectedCLV;
                estimatedCLV.style.color = '#FC6323';
                estimatedCLV.style.fontWeight = 'bold';
            }
            if (conversionProbability) {
                conversionProbability.textContent = profile.conversionProbability + '%';
                conversionProbability.style.color = '#FC6323';
                conversionProbability.style.fontWeight = 'bold';
            }
            if (interactionValue) {
                interactionValue.textContent = '$' + profile.interactionValue;
                interactionValue.style.color = '#FC6323';
                interactionValue.style.fontWeight = 'bold';
            }
        }
    }

    switchAnalyticsTab(tabId) {
        this.currentAnalyticsTab = tabId;
        
        // Update tab buttons with proper contrast
        document.querySelectorAll('.analytics-tab').forEach(btn => {
            btn.classList.remove('active');
            btn.style.color = '#6C757D';
            btn.style.borderBottomColor = 'transparent';
        });
        const activeTabBtn = document.querySelector(`.analytics-tab[onclick*="${tabId}"]`);
        if (activeTabBtn) {
            activeTabBtn.classList.add('active');
            activeTabBtn.style.color = '#FC6323';
            activeTabBtn.style.borderBottomColor = '#FC6323';
        }

        // Update tab content
        document.querySelectorAll('.analytics-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        const targetPanel = document.getElementById(tabId);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    }

    addBankingResponseOptions(options, callback) {
        const responseContainer = document.getElementById('banking-response-options');
        if (!responseContainer) return;

        responseContainer.innerHTML = '';

        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'response-btn';
            button.textContent = option;
            button.style.cssText = `
                background: #25D366 !important;
                color: #FFFFFF !important;
                border: none;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                cursor: pointer;
                margin-bottom: 8px;
                width: 100%;
                transition: background 0.2s ease;
            `;
            
            button.addEventListener('mouseover', () => {
                button.style.background = '#20B954 !important';
            });
            
            button.addEventListener('mouseout', () => {
                button.style.background = '#25D366 !important';
            });
            
            button.addEventListener('click', () => {
                // Add user response with proper WhatsApp styling
                const chatMessages = document.getElementById('banking-chat-messages');
                const userResponse = document.createElement('div');
                userResponse.className = 'chat-message outgoing';
                userResponse.style.cssText = `
                    background: #25D366 !important;
                    padding: 12px;
                    border-radius: 16px;
                    margin-bottom: 8px;
                    max-width: 80%;
                    margin-left: auto;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                `;
                userResponse.innerHTML = `
                    <div style="font-size: 14px; color: #FFFFFF !important; line-height: 1.4; margin-bottom: 4px;">${option}</div>
                    <div style="font-size: 11px; color: rgba(255, 255, 255, 0.8) !important; text-align: right;">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                `;
                chatMessages?.appendChild(userResponse);
                chatMessages?.scrollTo(0, chatMessages.scrollHeight);

                // Update session data based on user choice
                this.sessionData.interactions++;
                
                // Collect customer data based on user selection
                if (option.includes('John Smith')) {
                    this.sessionData.customerProfile['Customer name'] = 'John Smith';
                    this.sessionData.dataPoints++;
                    this.sessionData.behavioralTags.push('Identified user');
                }
                
                if (['Savings Account', 'Checking Account', 'Business Account', 'Student Account'].includes(option)) {
                    this.sessionData.customerProfile['Account type preference'] = option;
                    this.sessionData.dataPoints++;
                    this.sessionData.behavioralTags.push('Product preference set');
                }

                // Update analytics after user interaction
                setTimeout(() => {
                    this.updateDataPoints();
                    this.updateCustomerProfile();
                    this.updateBehavioralTags();
                    this.updateEngagementMetrics();
                    this.updateSegmentation();
                }, 300);

                responseContainer.innerHTML = '';
                callback();
            });
            responseContainer.appendChild(button);
        });
    }

    closeBankingDemoModal() {
        const modal = document.getElementById('banking-demo-modal');
        modal?.classList.add('hidden');
    }

    // ROI Calculator
    setupROICalculator() {
        const sliders = document.querySelectorAll('.range-slider');
        const inputs = document.querySelectorAll('input[type="number"]');

        sliders.forEach(slider => {
            slider.addEventListener('input', () => {
                this.calculateBankingROI();
            });
        });

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.calculateBankingROI();
            });
        });
    }

    updateSliderValue(sliderId, value) {
        const valueElement = document.getElementById(`${sliderId}-value`);
        if (valueElement) {
            valueElement.textContent = value;
            valueElement.style.color = '#0C1B2C';
        }
    }

    calculateBankingROI() {
        // Get input values with fallbacks
        const totalCustomers = parseInt(document.getElementById('total-customers')?.value || 1000000);
        const inactiveRate = parseInt(document.getElementById('inactive-rate')?.value || 70);
        const currentCAC = parseInt(document.getElementById('current-cac')?.value || 75);
        const averageLTV = parseInt(document.getElementById('average-ltv')?.value || 850);
        const targetReactivation = 28; // Fixed at 28% based on Access Bank case study
        const costReduction = 60; // Fixed at 60% based on platform capabilities

        // Calculate metrics
        const inactiveCustomers = totalCustomers * (inactiveRate / 100);
        const customersReactivated = inactiveCustomers * (targetReactivation / 100);
        const newAcquisitionCost = currentCAC * (1 - costReduction / 100);
        const operationalSavings = customersReactivated * (currentCAC - newAcquisitionCost);
        const revenueImpact = customersReactivated * averageLTV;
        const ltvIncrease = revenueImpact * 0.35; // 35% uplift assumption
        const totalROI = ((revenueImpact + operationalSavings) / (customersReactivated * newAcquisitionCost)) * 100;
        const paybackMonths = Math.ceil((customersReactivated * newAcquisitionCost) / (revenueImpact / 12));

        // Update DOM with proper styling
        const updates = {
            'banking-revenue-impact': this.formatCurrency(revenueImpact),
            'banking-revenue-change': `+${Math.round((revenueImpact / (totalCustomers * averageLTV * 0.16)) * 100)}% vs current`
        };

        Object.entries(updates).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
                if (id === 'banking-revenue-impact') {
                    element.style.color = '#FC6323';
                } else {
                    element.style.color = '#28A745';
                }
            }
        });
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        }).format(amount);
    }

    formatNumber(num) {
        return new Intl.NumberFormat('en-US').format(Math.round(num));
    }

    // Executive Actions
    contactExecutiveTeam() {
        this.showNotification('Executive consultation scheduled! 📞 Our C-level team will contact you within 24 hours.');
    }

    shareBankingResults() {
        const shareText = `Banking transformation with @Infobip: 35% revenue growth, 60% cost reduction! Transform your banking communication today.`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Infobip Banking ROI Results',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                this.showNotification('ROI results copied to clipboard! 📋');
            });
        }
    }

    exportBankingResults() {
        this.showNotification('Banking ROI report exported! 📄');
    }

    contactBankingSales() {
        this.showNotification('Connecting you with our banking specialists... 📞');
    }

    requestBankingDemo() {
        this.showNotification('Banking demo request submitted! 🏦 Our team will contact you within 24 hours.');
    }

    // CDP and other existing functionality
    switchMomentsTab(tabId) {
        document.querySelectorAll('.moments-tabs .tab-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.style.color = '#6C757D';
            btn.style.borderBottomColor = 'transparent';
        });
        const activeMomentsBtn = document.querySelector(`.moments-tabs .tab-btn[onclick*="${tabId}"]`);
        if (activeMomentsBtn) {
            activeMomentsBtn.classList.add('active');
            activeMomentsBtn.style.color = '#FC6323';
            activeMomentsBtn.style.borderBottomColor = '#FC6323';
        }

        document.querySelectorAll('.moments-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(tabId)?.classList.add('active');
    }

    selectCustomer(element, customerId) {
        document.querySelectorAll('.customer-item').forEach(item => {
            item.classList.remove('active');
        });
        element.classList.add('active');

        const customerData = {
            john: { name: 'John Smith' },
            mary: { name: 'Mary Davis' },
            david: { name: 'David Wilson' }
        };

        const data = customerData[customerId];
        if (data) {
            const nameElement = document.getElementById('customer-name');
            if (nameElement) {
                nameElement.textContent = data.name;
                nameElement.style.color = '#0C1B2C';
            }
        }
    }

    searchCustomers(query) {
        this.showNotification(`Searching for "${query}"...`);
    }

    switchIntegrationTab(tabId) {
        document.querySelectorAll('.integration-tabs .tab-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.style.color = '#6C757D';
            btn.style.borderBottomColor = 'transparent';
        });
        const activeIntegrationBtn = document.querySelector(`.integration-tabs .tab-btn[onclick*="${tabId}"]`);
        if (activeIntegrationBtn) {
            activeIntegrationBtn.classList.add('active');
            activeIntegrationBtn.style.color = '#FC6323';
            activeIntegrationBtn.style.borderBottomColor = '#FC6323';
        }

        document.querySelectorAll('.integration-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(tabId)?.classList.add('active');
    }

    // Utility Functions
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #FC6323 !important;
            color: #FFFFFF !important;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10000;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            animation: slideInRight 0.3s ease;
            max-width: 350px;
            word-wrap: break-word;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 4000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add required CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }

        /* Force analytics dashboard visibility */
        .analytics-dashboard-section {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .banking-demo-with-analytics {
            display: grid !important;
        }

        /* Additional contrast fixes */
        .summary-highlights .highlight {
            background: #F8F9FA;
            border: 1px solid #E1E5E9;
        }
        
        .highlight-number {
            color: #FC6323 !important;
        }
        
        .highlight-label {
            color: #0C1B2C !important;
        }
        
        .case-results .result-item {
            background: #FFFFFF;
            border: 1px solid #E1E5E9;
        }
        
        .result-number {
            color: #FC6323 !important;
        }
        
        .result-label {
            color: #343A40 !important;
        }
        
        .profile-stats .stat-card {
            background: #FFFFFF;
            border: 1px solid #E1E5E9;
            padding: 16px;
            border-radius: 8px;
            text-align: center;
        }
        
        .stat-card .stat-number {
            color: #FC6323 !important;
            font-size: 18px;
            font-weight: bold;
            display: block;
            margin-bottom: 4px;
        }
        
        .stat-card .stat-label {
            color: #343A40 !important;
            font-size: 12px;
        }
    `;
    document.head.appendChild(style);

    // Initialize the enhanced banking platform demo
    const app = new EnhancedBankingPlatformDemo();
    
    // Make functions globally available for HTML onclick handlers
    window.showSection = (section) => app.showSection(section);
    window.switchMarketingTab = (tab) => app.switchMarketingTab(tab);
    window.loadCampaignTemplate = (template) => app.loadCampaignTemplate(template);
    window.selectSupportConversation = (convId) => app.selectSupportConversation(convId);
    window.expandBusinessUnit = (unit) => app.expandBusinessUnit(unit);
    window.togglePhase = (phase) => app.togglePhase(phase);
    window.expandAllPhases = () => app.expandAllPhases();
    window.downloadRoadmap = () => app.downloadRoadmap();
    window.startImplementation = () => app.startImplementation();
    window.customizeRoadmap = () => app.customizeRoadmap();
    window.scheduleConsultation = () => app.scheduleConsultation();
    window.startBankingDemo = (useCase) => app.startBankingDemo(useCase);
    window.closeBankingDemoModal = () => app.closeBankingDemoModal();
    window.switchAnalyticsTab = (tab) => app.switchAnalyticsTab(tab);
    window.calculateBankingROI = () => app.calculateBankingROI();
    window.updateSliderValue = (id, value) => app.updateSliderValue(id, value);
    window.contactExecutiveTeam = () => app.contactExecutiveTeam();
    window.shareBankingResults = () => app.shareBankingResults();
    window.exportBankingResults = () => app.exportBankingResults();
    window.contactBankingSales = () => app.contactBankingSales();
    window.requestBankingDemo = () => app.requestBankingDemo();
    window.switchMomentsTab = (tab) => app.switchMomentsTab(tab);
    window.selectCustomer = (element, customerId) => app.selectCustomer(element, customerId);
    window.searchCustomers = (query) => app.searchCustomers(query);
    window.switchIntegrationTab = (tab) => app.switchIntegrationTab(tab);

    // Make app globally available for debugging
    window.enhancedBankingPlatformDemo = app;
    
    console.log('🏦 Enhanced Banking Platform Interactive Demo loaded with REAL-TIME ANALYTICS!');
    console.log('✨ All text contrast issues resolved using Infobip brand colors');
    console.log('📱 WhatsApp chat interface has perfect contrast');
    console.log('📊 FIXED: Real-time analytics dashboard now visible and functional!');
    console.log('🎯 Analytics updates in real-time showing data collection, segmentation, personalization & future planning');
});

// Handle responsive navigation for mobile
document.addEventListener('DOMContentLoaded', () => {
    const handleResize = () => {
        const nav = document.querySelector('.main-nav');
        if (window.innerWidth <= 768) {
            // Mobile view adjustments
            if (nav) {
                nav.style.flexWrap = 'wrap';
                nav.style.justifyContent = 'center';
            }
        } else {
            // Desktop view
            if (nav) {
                nav.style.flexWrap = 'wrap';
                nav.style.justifyContent = 'flex-start';
            }
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedBankingPlatformDemo;
}