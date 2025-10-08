// Infobip Africa Banking Demo Application
class InfobipBankingDemo {
    constructor() {
        this.selectedCountry = null;
        this.enabledProducts = new Set();
        this.enabledChannels = new Set();
        this.currentScenario = null;
        this.currentStep = 0;
        this.conversationData = [];
        this.analyticsData = {
            engagementScore: 0,
            conversionProbability: 0,
            interestLevel: 'Low',
            dataPoints: []
        };
        this.chart = null;

        // Application data
        this.data = {
            "africaData": {
                "nigeria": {
                    "name": "Nigeria",
                    "population": "218M",
                    "mobilePenetration": "92%",
                    "whatsappPenetration": "95.1%",
                    "smartphoneAdoption": "45%",
                    "bankingDigitalization": "41%",
                    "keyPlayers": ["GTBank", "Access Bank", "First Bank", "UBA", "Zenith Bank"],
                    "challenges": ["Low financial inclusion", "High CAC", "Regulatory compliance"],
                    "opportunities": ["Mobile money growth", "Digital payments surge", "Youth demographics"],
                    "mobileMoneyUsers": "51M",
                    "internetPenetration": "51%",
                    "avgMonthlySalary": "₦120,000",
                    "preferredChannels": ["WhatsApp", "SMS", "USSD"],
                    "bankingBehavior": {
                        "mobileFirst": true,
                        "prefersMobileApps": 78,
                        "whatsappBanking": 23,
                        "trustLevel": "Medium"
                    }
                },
                "kenya": {
                    "name": "Kenya",
                    "population": "56M",
                    "mobilePenetration": "97%", 
                    "whatsappPenetration": "97%",
                    "smartphoneAdoption": "58%",
                    "bankingDigitalization": "78%",
                    "keyPlayers": ["Safaricom M-Pesa", "Equity Bank", "KCB Bank", "Absa", "Co-op Bank"],
                    "challenges": ["Market saturation", "Competition from fintech"],
                    "opportunities": ["M-Pesa ecosystem", "Digital lending", "Rural expansion"],
                    "mobileMoneyUsers": "32M",
                    "internetPenetration": "87%",
                    "avgMonthlySalary": "KSh 65,000",
                    "preferredChannels": ["M-Pesa", "WhatsApp", "SMS"],
                    "bankingBehavior": {
                        "mobileFirst": true,
                        "prefersMobileApps": 89,
                        "whatsappBanking": 45,
                        "trustLevel": "High"
                    }
                },
                "southAfrica": {
                    "name": "South Africa",
                    "population": "60M",
                    "mobilePenetration": "96%",
                    "whatsappPenetration": "96%", 
                    "smartphoneAdoption": "71%",
                    "bankingDigitalization": "85%",
                    "keyPlayers": ["Standard Bank", "FNB", "Absa", "Nedbank", "Capitec"],
                    "challenges": ["Economic instability", "High inequality"],
                    "opportunities": ["Digital transformation", "Open banking", "AI adoption"],
                    "mobileMoneyUsers": "15M",
                    "internetPenetration": "70%",
                    "avgMonthlySalary": "R 23,000",
                    "preferredChannels": ["Mobile Apps", "WhatsApp", "USSD"],
                    "bankingBehavior": {
                        "mobileFirst": true,
                        "prefersMobileApps": 91,
                        "whatsappBanking": 67,
                        "trustLevel": "High"
                    }
                },
                "ghana": {
                    "name": "Ghana",
                    "population": "33M",
                    "mobilePenetration": "95%",
                    "whatsappPenetration": "89%",
                    "smartphoneAdoption": "48%",
                    "bankingDigitalization": "58%",
                    "keyPlayers": ["MTN MoMo", "Vodafone Cash", "GCB Bank", "Ecobank", "Access Bank"],
                    "challenges": ["Infrastructure gaps", "Regulatory changes"],
                    "opportunities": ["Mobile money leadership", "Cross-border payments"],
                    "mobileMoneyUsers": "18M",
                    "internetPenetration": "68%",
                    "avgMonthlySalary": "GH₵ 2,800",
                    "preferredChannels": ["Mobile Money", "WhatsApp", "USSD"],
                    "bankingBehavior": {
                        "mobileFirst": true,
                        "prefersMobileApps": 72,
                        "whatsappBanking": 34,
                        "trustLevel": "Medium"
                    }
                }
            },
            "bankingScenarios": [
                {
                    "id": "account-reactivation",
                    "title": "Banking Customer Reactivation",
                    "description": "Reactivate dormant customers with personalized offers and incentives",
                    "businessName": "Access Bank",
                    "avatar": "🏦",
                    "priority": "High",
                    "conversionRate": "28%",
                    "avgCAC": "₦1,850",
                    "roi": "340%",
                    "journey": [
                        {
                            "step": 1,
                            "type": "outgoing",
                            "message": "Hi John! 👋 We noticed you haven't been active lately. We've got exciting new benefits waiting for you! Want to see what you're missing?",
                            "options": ["See Benefits", "Not Interested", "Call Me Later"],
                            "dataCollected": {
                                "lastActivity": "127 days ago",
                                "accountBalance": "₦45,230",
                                "customerSegment": "Warm",
                                "preferredChannel": "WhatsApp"
                            }
                        },
                        {
                            "step": 2,
                            "type": "outgoing", 
                            "message": "Great choice! Here's what you're missing:\n💳 2% Cashback on all purchases\n📱 Mobile banking rewards program\n🎁 Exclusive member-only offers\n💰 Higher savings rates\n\nWhich benefit interests you most?",
                            "options": ["Cashback Program", "Savings Rates", "Mobile Rewards", "All Benefits"],
                            "dataCollected": {
                                "engagementScore": "75/100",
                                "interestLevel": "High",
                                "conversionProbability": "68%"
                            }
                        },
                        {
                            "step": 3,
                            "type": "outgoing",
                            "message": "Perfect! Our cashback program gives you:\n• 2% on all purchases\n• 5% on groceries & fuel ⛽\n• 10% on dining 🍽️\n• Bonus points for every transaction\n\nPlus, you'll get instant notifications and monthly summaries. Ready to reactivate your account?",
                            "options": ["Yes, Reactivate!", "More Details", "Speak to Agent"],
                            "dataCollected": {
                                "engagementScore": "95/100",
                                "interestLevel": "Very High", 
                                "conversionProbability": "85%"
                            }
                        }
                    ]
                },
                {
                    "id": "loan-application",
                    "title": "Digital Loan Application",
                    "description": "Complete loan application process through conversational interface",
                    "businessName": "First Bank Nigeria",
                    "avatar": "💳",
                    "priority": "High",
                    "conversionRate": "85%",
                    "avgProcessingTime": "5 minutes",
                    "journey": [
                        {
                            "step": 1,
                            "type": "outgoing",
                            "message": "Hello! 🏦 Ready to apply for a personal loan? I can help you get pre-approved in under 5 minutes. Let's start with some basic information.",
                            "options": ["Start Application", "Learn More", "Check Requirements"],
                            "dataCollected": {
                                "eligibilityScore": "Good",
                                "creditRating": "720",
                                "existingCustomer": "Yes",
                                "monthlyIncome": "₦180,000"
                            }
                        },
                        {
                            "step": 2,
                            "type": "outgoing",
                            "message": "Excellent! Based on your profile, you're pre-qualified for up to ₦500,000 at 12% APR. 📊\n\nYour monthly income: ₦180,000 ✅\nCredit score: 720 ✅\nEmployment: Verified ✅\n\nHow much would you like to borrow?",
                            "options": ["₦100,000", "₦250,000", "₦500,000", "Custom Amount"],
                            "dataCollected": {
                                "preApprovalAmount": "₦500,000",
                                "interestRate": "12% APR",
                                "processingTime": "24 hours"
                            }
                        },
                        {
                            "step": 3,
                            "type": "outgoing",
                            "message": "Perfect choice! Here's your loan summary:\n\n💰 Loan Amount: ₦250,000\n📅 Term: 12 months\n💳 Monthly Payment: ₦23,456\n📈 Interest Rate: 12% APR\n⏰ Funds available: Within 24 hours\n\nReady to proceed?",
                            "options": ["Accept Loan", "Change Terms", "Download Terms"],
                            "dataCollected": {
                                "loanAmount": "₦250,000",
                                "monthlyPayment": "₦23,456",
                                "approvalStatus": "Pre-approved"
                            }
                        }
                    ]
                },
                {
                    "id": "mobile-money-transfer",
                    "title": "Mobile Money Transfer",
                    "description": "Send money across Africa using mobile money networks",
                    "businessName": "Equity Bank Kenya",
                    "avatar": "📲",
                    "priority": "High",
                    "conversionRate": "92%",
                    "avgTransactionTime": "30 seconds",
                    "journey": [
                        {
                            "step": 1,
                            "type": "outgoing",
                            "message": "Hi Grace! 👋 Welcome to Equity Mobile. I can help you send money instantly across Kenya and East Africa. What would you like to do today?",
                            "options": ["Send Money", "Check Balance", "Transaction History", "Pay Bills"],
                            "dataCollected": {
                                "customerType": "Premium",
                                "accountBalance": "KSh 125,450",
                                "lastTransaction": "2 hours ago"
                            }
                        },
                        {
                            "step": 2,
                            "type": "outgoing",
                            "message": "Great! I'll help you send money. Please provide:\n\n📱 Recipient's phone number\n💰 Amount to send\n🌍 Destination (Kenya/Uganda/Tanzania)\n\nOr choose a recent recipient:",
                            "options": ["+254712345678 - Mary K.", "+256701234567 - James M.", "New Recipient"],
                            "dataCollected": {
                                "availableBalance": "KSh 125,450",
                                "dailyLimit": "KSh 150,000",
                                "transactionFee": "KSh 25"
                            }
                        },
                        {
                            "step": 3,
                            "type": "outgoing",
                            "message": "Perfect! Here are the details:\n\n👤 To: Mary Kamau (+254712345678)\n💰 Amount: KSh 5,000\n💳 Fee: KSh 25\n📍 Network: M-Pesa\n⚡ Delivery: Instant\n\nTotal deduction: KSh 5,025\nConfirm transfer?",
                            "options": ["Confirm & Send", "Edit Details", "Cancel"],
                            "dataCollected": {
                                "recipient": "Mary Kamau",
                                "amount": "KSh 5,000",
                                "totalCost": "KSh 5,025",
                                "deliveryTime": "Instant"
                            }
                        }
                    ]
                },
                {
                    "id": "account-opening",
                    "title": "Digital Account Opening",
                    "description": "Open a new bank account through conversational KYC process",
                    "businessName": "Standard Bank South Africa",
                    "avatar": "🆔",
                    "priority": "Medium",
                    "conversionRate": "78%",
                    "avgCompletionTime": "8 minutes",
                    "journey": [
                        {
                            "step": 1,
                            "type": "outgoing",
                            "message": "Welcome to Standard Bank! 🏛️ I'm here to help you open a new account in just a few minutes. To get started, what type of account interests you?",
                            "options": ["Savings Account", "Cheque Account", "Student Account", "Business Account"],
                            "dataCollected": {
                                "isNewCustomer": true,
                                "referralSource": "WhatsApp Ad",
                                "location": "Cape Town"
                            }
                        },
                        {
                            "step": 2,
                            "type": "outgoing",
                            "message": "Great choice! Our Savings Account offers:\n\n💰 4.5% annual interest\n🚫 No monthly fees\n💳 Free debit card\n📱 Mobile banking included\n🌍 Global ATM access\n\nTo continue, I'll need to verify your identity. Do you have your SA ID document ready?",
                            "options": ["Yes, I'm Ready", "Need More Info", "Use Passport Instead"],
                            "dataCollected": {
                                "accountType": "Savings",
                                "interestRate": "4.5%",
                                "monthlyFee": "R0"
                            }
                        },
                        {
                            "step": 3,
                            "type": "outgoing",
                            "message": "Perfect! Please take a clear photo of your SA ID (both sides) and a selfie for verification. 📷\n\n✅ ID Document: Front & Back\n✅ Selfie: Clear face photo\n📧 Email: For statements\n📱 Phone: Already verified\n\nThis process is secure and POPI compliant. Ready to upload?",
                            "options": ["Upload Documents", "Learn About Security", "Call Agent"],
                            "dataCollected": {
                                "kycStatus": "Pending Upload",
                                "documentType": "SA ID",
                                "verificationMethod": "Biometric"
                            }
                        }
                    ]
                },
                {
                    "id": "investment-advisory",
                    "title": "Investment Advisory Service",
                    "description": "Get personalized investment advice and portfolio recommendations",
                    "businessName": "FNB Private Wealth",
                    "avatar": "📈",
                    "priority": "Medium",
                    "conversionRate": "65%",
                    "avgInvestment": "R 50,000",
                    "journey": [
                        {
                            "step": 1,
                            "type": "outgoing",
                            "message": "Hello! 👋 Welcome to FNB Wealth. I'm here to help you grow your money with smart investments tailored to your goals. What's your investment experience?",
                            "options": ["Complete Beginner", "Some Experience", "Experienced Investor", "Professional"],
                            "dataCollected": {
                                "customerSegment": "High Net Worth",
                                "riskProfile": "Unknown",
                                "investmentGoals": "Growth"
                            }
                        },
                        {
                            "step": 2,
                            "type": "outgoing",
                            "message": "Great! For someone with some experience, I recommend a diversified approach. Let me ask:\n\n🎯 What's your main goal?\n💰 How much are you looking to invest?\n📅 What's your time horizon?\n⚖️ How comfortable are you with risk?",
                            "options": ["Retirement Planning", "Wealth Building", "Children's Education", "Emergency Fund"],
                            "dataCollected": {
                                "experienceLevel": "Intermediate",
                                "investmentHorizon": "5-10 years",
                                "riskTolerance": "Moderate"
                            }
                        },
                        {
                            "step": 3,
                            "type": "outgoing",
                            "message": "Excellent! Based on your profile, here's a recommended portfolio:\n\n📊 60% Equity Funds (Growth)\n🏛️ 30% Bonds (Stability)  \n🌍 10% International (Diversification)\n\n💹 Expected return: 8-12% p.a.\n⚖️ Risk level: Moderate\n💰 Min. investment: R10,000\n\nWould you like to proceed?",
                            "options": ["Start Investing", "Adjust Portfolio", "Speak to Advisor"],
                            "dataCollected": {
                                "recommendedPortfolio": "Balanced Growth",
                                "expectedReturn": "8-12%",
                                "minimumInvestment": "R10,000"
                            }
                        }
                    ]
                }
            ]
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeChart();
        this.selectDefaultCountry();
        this.selectDefaultScenario();
        // Enable default products for demo
        this.enableDefaultProducts();
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => this.switchTab(e.target.dataset.section));
        });

        // Country selection
        document.querySelectorAll('.country-card').forEach(card => {
            card.addEventListener('click', (e) => this.selectCountry(e.currentTarget.dataset.country));
            card.setAttribute('tabindex', '0');
            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.selectCountry(e.currentTarget.dataset.country);
                }
            });
        });

        // Product toggles
        document.querySelectorAll('.product-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.toggleProduct(e.target.dataset.product, e.target.checked));
        });

        // Channel toggles
        document.querySelectorAll('.channel-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.toggleChannel(e.target.dataset.channel, e.target.checked));
        });

        // Scenario selection
        document.querySelectorAll('.scenario-item').forEach(item => {
            item.addEventListener('click', (e) => this.selectScenario(e.currentTarget.dataset.scenario));
            item.setAttribute('tabindex', '0');
            item.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.selectScenario(e.currentTarget.dataset.scenario);
                }
            });
        });

        // Mobile demo interactions
        const messageInput = document.getElementById('message-input');
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
                this.sendUserMessage(e.target.value.trim());
                e.target.value = '';
            }
        });

        document.getElementById('send-button').addEventListener('click', (e) => {
            e.preventDefault();
            const input = document.getElementById('message-input');
            if (input.value.trim()) {
                this.sendUserMessage(input.value.trim());
                input.value = '';
            }
        });

        // ROI Calculator
        document.getElementById('calculate-roi').addEventListener('click', (e) => {
            e.preventDefault();
            this.calculateROI();
        });

        // Auto-calculate on input change
        ['monthly-interactions', 'current-cost', 'current-conversion', 'avg-transaction'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => this.calculateROI());
            }
        });
    }

    enableDefaultProducts() {
        // Enable Answers product by default for demo
        const answersCheckbox = document.querySelector('[data-product="answers"]');
        if (answersCheckbox) {
            answersCheckbox.checked = true;
            this.toggleProduct('answers', true);
        }

        // Enable WhatsApp channel by default
        const whatsappCheckbox = document.querySelector('[data-channel="whatsapp"]');
        if (whatsappCheckbox) {
            whatsappCheckbox.checked = true;
            this.toggleChannel('whatsapp', true);
        }
    }

    switchTab(sectionId) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

        // Update sections
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');

        this.showNotification(`Switched to ${this.formatSectionName(sectionId)}`, 'info');
    }

    formatSectionName(sectionId) {
        return sectionId.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    selectCountry(countryKey) {
        // Remove previous selection
        document.querySelectorAll('.country-card').forEach(card => card.classList.remove('selected'));
        
        // Add selection to current card
        const selectedCard = document.querySelector(`[data-country="${countryKey}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }
        
        this.selectedCountry = countryKey;
        const countryData = this.data.africaData[countryKey];
        
        this.showNotification(`Selected ${countryData.name} as target market`, 'success');
        
        // Update mobile demo based on country
        this.updateDemoForCountry(countryData);
    }

    selectDefaultCountry() {
        this.selectCountry('nigeria');
    }

    updateDemoForCountry(countryData) {
        // This would update scenarios and messaging based on selected country
        // For now, we'll keep the default scenarios but could customize them
    }

    toggleProduct(productKey, enabled) {
        const productCard = document.querySelector(`[data-product="${productKey}"]`);
        
        if (enabled) {
            this.enabledProducts.add(productKey);
            if (productCard) {
                productCard.classList.add('enabled');
            }
            this.showNotification(`${this.formatProductName(productKey)} enabled`, 'success');
        } else {
            this.enabledProducts.delete(productKey);
            if (productCard) {
                productCard.classList.remove('enabled');
            }
            this.showNotification(`${this.formatProductName(productKey)} disabled`, 'info');
        }
        
        // Enable message input if any product is enabled
        this.updateMessageInputState();
    }

    toggleChannel(channelKey, enabled) {
        const channelCard = document.querySelector(`[data-channel="${channelKey}"]`);
        
        if (enabled) {
            this.enabledChannels.add(channelKey);
            if (channelCard) {
                channelCard.classList.add('enabled');
            }
            this.showNotification(`${this.formatChannelName(channelKey)} channel enabled`, 'success');
        } else {
            this.enabledChannels.delete(channelKey);
            if (channelCard) {
                channelCard.classList.remove('enabled');
            }
            this.showNotification(`${this.formatChannelName(channelKey)} channel disabled`, 'info');
        }
    }

    formatProductName(productKey) {
        const names = {
            'moments': 'Moments',
            'conversations': 'Conversations',
            'answers': 'Answers'
        };
        return names[productKey] || productKey;
    }

    formatChannelName(channelKey) {
        const names = {
            'whatsapp': 'WhatsApp Business',
            'sms': 'SMS',
            'email': 'Email',
            'voice': 'Voice'
        };
        return names[channelKey] || channelKey;
    }

    updateMessageInputState() {
        const messageInput = document.getElementById('message-input');
        if (messageInput) {
            const hasEnabledProducts = this.enabledProducts.size > 0;
            
            messageInput.disabled = !hasEnabledProducts;
            messageInput.placeholder = hasEnabledProducts ? 
                "Type a message..." : 
                "Enable a product to start messaging";
        }
    }

    selectScenario(scenarioId) {
        // Remove previous selection
        document.querySelectorAll('.scenario-item').forEach(item => item.classList.remove('active'));
        
        // Add selection to current item
        const selectedItem = document.querySelector(`[data-scenario="${scenarioId}"]`);
        if (selectedItem) {
            selectedItem.classList.add('active');
        }
        
        this.currentScenario = this.data.bankingScenarios.find(s => s.id === scenarioId);
        this.currentStep = 0;
        
        // Reset conversation
        this.resetConversation();
        
        // Start scenario
        this.startScenario();
    }

    selectDefaultScenario() {
        this.selectScenario('account-reactivation');
    }

    resetConversation() {
        const chatContainer = document.getElementById('chat-container');
        const messageOptions = document.getElementById('message-options');
        
        if (chatContainer) {
            chatContainer.innerHTML = '';
        }
        if (messageOptions) {
            messageOptions.innerHTML = '';
        }
        
        // Reset analytics
        this.analyticsData = {
            engagementScore: 0,
            conversionProbability: 0,
            interestLevel: 'Low',
            dataPoints: []
        };
        this.updateAnalytics();
        
        this.conversationData = [];
    }

    startScenario() {
        if (!this.currentScenario) return;
        
        // Update bank info
        const bankAvatar = document.getElementById('bank-avatar');
        const bankName = document.getElementById('bank-name');
        
        if (bankAvatar) {
            bankAvatar.textContent = this.currentScenario.avatar;
        }
        if (bankName) {
            bankName.textContent = this.currentScenario.businessName;
        }
        
        // Show first message after a delay
        setTimeout(() => {
            this.showNextMessage();
        }, 1000);
        
        this.showNotification(`Started ${this.currentScenario.title} scenario`, 'success');
    }

    showNextMessage() {
        if (!this.currentScenario || this.currentStep >= this.currentScenario.journey.length) {
            return;
        }
        
        const currentJourney = this.currentScenario.journey[this.currentStep];
        
        // Add message to chat
        this.addMessage(currentJourney.message, 'incoming');
        
        // Show options if available
        if (currentJourney.options && currentJourney.options.length > 0) {
            this.showQuickReplies(currentJourney.options);
        }
        
        // Update analytics with collected data
        if (currentJourney.dataCollected) {
            this.updateAnalyticsFromData(currentJourney.dataCollected);
        }
        
        this.currentStep++;
    }

    addMessage(text, type) {
        const chatContainer = document.getElementById('chat-container');
        if (!chatContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        // Format message with line breaks
        const formattedText = text.replace(/\n/g, '<br>');
        messageDiv.innerHTML = formattedText;
        
        // Add timestamp
        const timeSpan = document.createElement('div');
        timeSpan.className = 'message-time';
        const now = new Date();
        timeSpan.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        messageDiv.appendChild(timeSpan);
        
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        // Store conversation data
        this.conversationData.push({
            text: text,
            type: type,
            timestamp: now
        });
    }

    showQuickReplies(options) {
        const optionsContainer = document.getElementById('message-options');
        if (!optionsContainer) return;
        
        optionsContainer.innerHTML = '';
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'quick-reply';
            button.textContent = option;
            button.addEventListener('click', () => {
                this.selectQuickReply(option);
            });
            optionsContainer.appendChild(button);
        });
    }

    selectQuickReply(option) {
        // Add user message
        this.addMessage(option, 'outgoing');
        
        // Clear options
        const optionsContainer = document.getElementById('message-options');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
        }
        
        // Show next message after delay
        setTimeout(() => {
            this.showNextMessage();
        }, 1500);
        
        // Update engagement
        this.updateEngagement();
    }

    sendUserMessage(text) {
        // Allow typing even without products enabled for demo purposes
        this.addMessage(text, 'outgoing');
        
        // Clear options
        const optionsContainer = document.getElementById('message-options');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
        }
        
        // Simulate AI response
        setTimeout(() => {
            this.simulateAIResponse(text);
        }, 1500);
        
        this.updateEngagement();
    }

    simulateAIResponse(userMessage) {
        const responses = [
            "Thank you for your message! Let me help you with that. 😊",
            "I understand. Let me provide you with the information you need.",
            "Great question! Based on your inquiry, here's what I recommend:",
            "I'd be happy to assist you. Let me check that for you right away.",
            "That's interesting! Let me connect you with the right solution."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        this.addMessage(randomResponse, 'incoming');
        
        // Show some follow-up options
        const followUpOptions = ["Tell me more", "Yes, that helps", "I need something else"];
        this.showQuickReplies(followUpOptions);
    }

    updateAnalyticsFromData(data) {
        if (data.engagementScore) {
            const score = parseInt(data.engagementScore.split('/')[0]);
            this.analyticsData.engagementScore = score;
        }
        
        if (data.conversionProbability) {
            this.analyticsData.conversionProbability = parseInt(data.conversionProbability);
        }
        
        if (data.interestLevel) {
            this.analyticsData.interestLevel = data.interestLevel;
        }
        
        // Add data points
        Object.keys(data).forEach(key => {
            if (key !== 'engagementScore' && key !== 'conversionProbability' && key !== 'interestLevel') {
                this.analyticsData.dataPoints.push({
                    name: this.formatDataPointName(key),
                    value: data[key]
                });
            }
        });
        
        this.updateAnalytics();
    }

    formatDataPointName(key) {
        return key.replace(/([A-Z])/g, ' $1')
                  .replace(/^./, str => str.toUpperCase());
    }

    updateEngagement() {
        // Increase engagement based on interaction
        this.analyticsData.engagementScore = Math.min(100, this.analyticsData.engagementScore + 15);
        this.analyticsData.conversionProbability = Math.min(100, this.analyticsData.conversionProbability + 10);
        
        // Update interest level
        if (this.analyticsData.engagementScore > 70) {
            this.analyticsData.interestLevel = 'Very High';
        } else if (this.analyticsData.engagementScore > 40) {
            this.analyticsData.interestLevel = 'High';
        } else if (this.analyticsData.engagementScore > 20) {
            this.analyticsData.interestLevel = 'Medium';
        } else {
            this.analyticsData.interestLevel = 'Low';
        }
        
        this.updateAnalytics();
    }

    updateAnalytics() {
        // Update engagement score
        const engagementScoreEl = document.getElementById('engagement-score');
        const engagementProgressEl = document.getElementById('engagement-progress');
        
        if (engagementScoreEl) {
            engagementScoreEl.textContent = `${this.analyticsData.engagementScore}/100`;
        }
        if (engagementProgressEl) {
            engagementProgressEl.style.width = `${this.analyticsData.engagementScore}%`;
        }
        
        // Update conversion probability
        const conversionProbabilityEl = document.getElementById('conversion-probability');
        const conversionProgressEl = document.getElementById('conversion-progress');
        
        if (conversionProbabilityEl) {
            conversionProbabilityEl.textContent = `${this.analyticsData.conversionProbability}%`;
        }
        if (conversionProgressEl) {
            conversionProgressEl.style.width = `${this.analyticsData.conversionProbability}%`;
        }
        
        // Update interest level
        const interestLevelEl = document.getElementById('interest-level');
        if (interestLevelEl) {
            interestLevelEl.textContent = this.analyticsData.interestLevel;
        }
        
        const interestDot = document.getElementById('interest-dot');
        if (interestDot) {
            interestDot.className = 'indicator-dot';
            if (this.analyticsData.interestLevel === 'Low') {
                interestDot.classList.add('low');
            } else if (['Medium', 'High'].includes(this.analyticsData.interestLevel)) {
                interestDot.classList.add('medium');
            } else {
                interestDot.classList.add('high');
            }
        }
        
        // Update data points
        const dataPointsEl = document.getElementById('data-points');
        if (dataPointsEl) {
            dataPointsEl.textContent = this.analyticsData.dataPoints.length;
        }
        
        const dataPointsList = document.getElementById('data-points-list');
        if (dataPointsList) {
            dataPointsList.innerHTML = '';
            this.analyticsData.dataPoints.slice(-5).forEach(point => {
                const div = document.createElement('div');
                div.className = 'data-point';
                div.textContent = `${point.name}: ${point.value}`;
                dataPointsList.appendChild(div);
            });
        }
    }

    initializeChart() {
        const ctx = document.getElementById('metricsChart');
        if (!ctx || !window.Chart) return;
        
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Customer Satisfaction', 'Response Time (seconds)', 'Cost per Interaction ($)', 'Conversion Rate (%)'],
                datasets: [{
                    label: 'Traditional Banking',
                    data: [3.2, 180, 15, 12],
                    backgroundColor: '#B4413C',
                    borderColor: '#B4413C',
                    borderWidth: 1
                }, {
                    label: 'Conversational Banking',
                    data: [4.8, 5, 4.5, 35],
                    backgroundColor: '#1FB8CD',
                    borderColor: '#1FB8CD',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Banking Performance Metrics Comparison'
                    },
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value, index, values) {
                                // Format different metrics appropriately
                                const labelIndex = Math.floor(index / 2);
                                const labels = ['Customer Satisfaction', 'Response Time (seconds)', 'Cost per Interaction ($)', 'Conversion Rate (%)'];
                                const currentLabel = labels[labelIndex] || '';
                                
                                if (currentLabel.includes('Satisfaction')) {
                                    return value + '/5';
                                } else if (currentLabel.includes('Rate')) {
                                    return value + '%';
                                } else if (currentLabel.includes('Cost')) {
                                    return '$' + value;
                                } else {
                                    return value;
                                }
                            }
                        }
                    }
                }
            }
        });
    }

    calculateROI() {
        const monthlyInteractions = parseInt(document.getElementById('monthly-interactions')?.value) || 0;
        const currentCost = parseFloat(document.getElementById('current-cost')?.value) || 0;
        const currentConversion = parseFloat(document.getElementById('current-conversion')?.value) || 0;
        const avgTransaction = parseFloat(document.getElementById('avg-transaction')?.value) || 0;
        
        if (monthlyInteractions === 0 || currentCost === 0) {
            return;
        }
        
        // Calculate conversational banking improvements
        const newCostPerInteraction = currentCost * 0.3; // 70% reduction
        const newConversionRate = currentConversion * 2.38; // 138% improvement
        
        // Monthly calculations
        const monthlyCostSavings = monthlyInteractions * (currentCost - newCostPerInteraction);
        const currentMonthlyRevenue = monthlyInteractions * (currentConversion / 100) * avgTransaction;
        const newMonthlyRevenue = monthlyInteractions * (newConversionRate / 100) * avgTransaction;
        const monthlyRevenueIncrease = newMonthlyRevenue - currentMonthlyRevenue;
        
        // Annual calculations
        const annualSavings = monthlyCostSavings * 12;
        const annualRevenueIncrease = monthlyRevenueIncrease * 12;
        const totalAnnualBenefit = annualSavings + annualRevenueIncrease;
        
        // ROI calculation (assuming implementation cost of $50k)
        const implementationCost = 50000;
        const annualROI = ((totalAnnualBenefit - implementationCost) / implementationCost) * 100;
        const paybackPeriod = implementationCost / (monthlyCostSavings + monthlyRevenueIncrease);
        
        // Update display
        const costSavingsEl = document.getElementById('cost-savings');
        const revenueIncreaseEl = document.getElementById('revenue-increase');
        const annualRoiEl = document.getElementById('annual-roi');
        const paybackPeriodEl = document.getElementById('payback-period');
        
        if (costSavingsEl) {
            costSavingsEl.textContent = '$' + monthlyCostSavings.toLocaleString(undefined, {maximumFractionDigits: 0});
        }
        if (revenueIncreaseEl) {
            revenueIncreaseEl.textContent = '$' + monthlyRevenueIncrease.toLocaleString(undefined, {maximumFractionDigits: 0});
        }
        if (annualRoiEl) {
            annualRoiEl.textContent = Math.round(annualROI) + '%';
        }
        if (paybackPeriodEl) {
            paybackPeriodEl.textContent = Math.round(paybackPeriod) + ' months';
        }
        
        // Show results
        const roiResults = document.getElementById('roi-results');
        if (roiResults) {
            roiResults.style.display = 'block';
        }
    }

    showNotification(message, type = 'info') {
        const notificationsContainer = document.getElementById('notifications');
        if (!notificationsContainer) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notificationsContainer.appendChild(notification);
        
        // Remove notification after 4 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 4000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.infobipDemo = new InfobipBankingDemo();
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = InfobipBankingDemo;
}