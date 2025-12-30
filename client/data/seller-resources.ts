import { FileText, CheckSquare, TrendingUp, Home, DollarSign, Users } from "lucide-react";

export interface SellerResource {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name as string (to avoid LucideIcon circular dependency)
  category: "guide" | "checklist" | "tool" | "market-insights";
  content: string;
}

export const sellerResources: SellerResource[] = [
  {
    id: "home-selling-checklist",
    title: "Home Selling Checklist",
    description: "A comprehensive checklist to prepare your home for the market and ensure nothing is missed.",
    icon: "CheckSquare",
    category: "checklist",
    content: `
## Home Selling Checklist

### Pre-Listing (6-8 Weeks Before)
- [ ] Declutter and depersonalize your home
- [ ] Deep clean carpets and hard floors
- [ ] Paint any heavily scuffed or stained walls
- [ ] Fix any obvious maintenance issues
- [ ] Get a professional home inspection
- [ ] Hire a professional photographer
- [ ] Review comparable home prices in your area

### Two Weeks Before Listing
- [ ] Get a professional home appraisal
- [ ] Set a competitive asking price
- [ ] Prepare listing documentation
- [ ] Schedule open house dates
- [ ] Notify neighbors about upcoming sale
- [ ] Create a home sellers timeline

### During Active Listing
- [ ] Keep home clean and organized
- [ ] Schedule showings promptly
- [ ] Document all showing feedback
- [ ] Respond to inquiries professionally
- [ ] Be ready for negotiations
- [ ] Gather closing documents

### After Offer Accepted
- [ ] Provide inspection documents
- [ ] Arrange final walkthrough
- [ ] Prepare for closing
- [ ] Forward utilities and update address
- [ ] Coordinate final repairs if needed

### At Closing
- [ ] Review all closing documents
- [ ] Do final walkthrough
- [ ] Transfer utility accounts
- [ ] Provide keys and access codes
- [ ] Celebrate your sale!
    `,
  },
  {
    id: "preparing-home-for-sale",
    title: "How to Prepare Your Home for Sale",
    description: "Step-by-step guide to get your home market-ready and attract serious buyers.",
    icon: "Home",
    category: "guide",
    content: `
## How to Prepare Your Home for Sale

### Curb Appeal (First Impressions Matter)
Buyers make decisions within seconds of seeing your home. Enhance curb appeal by:
- Power washing the exterior
- Repainting the front door if needed
- Landscaping and lawn maintenance
- Clean windows and gutters
- Declutter porches and entryways
- Add fresh mulch to garden beds
- Ensure house number is visible

### Interior Preparation
**Kitchen & Bathrooms:**
- Clean and degrease all surfaces
- Update hardware and faucets if dated
- Repair leaking faucets immediately
- Refresh caulking and grout
- Paint if walls are dingy

**Living Spaces:**
- Neutralize wall colors (soft grays, beiges, whites)
- Remove family photos and personal items
- Deep clean all surfaces
- Repair any visible damage
- Update light fixtures if very dated

**Bedrooms & Closets:**
- Make beds with neutral, high-quality bedding
- Clear closets of excess items
- Organize remaining clothing and items
- Ensure proper lighting
- Keep rooms uncluttered

### Key Repairs & Maintenance
- Fix any broken fixtures or hardware
- Repair drywall holes and scuffs
- Address water stains or mold
- Update dated electrical outlets
- Ensure all doors close properly
- Fix any visible plumbing issues
- Replace air filters

### Staging Tips
- Arrange furniture to show space and flow
- Remove excess furniture to open rooms
- Use neutral colors for decorating
- Add fresh flowers or plants
- Ensure proper lighting throughout
- Remove pet odors and hair
- Use pleasant scents (fresh bake smell!)

### Documentation
- Gather home improvement receipts
- Prepare maintenance records
- Get energy efficiency documentation
- Compile appliance manuals and warranties
    `,
  },
  {
    id: "calgary-market-trends",
    title: "Calgary Real Estate Market Trends",
    description: "Current market analysis and insights specific to Calgary's real estate landscape.",
    icon: "TrendingUp",
    category: "market-insights",
    content: `
## Calgary Real Estate Market Trends

### Current Market Overview
Calgary's real estate market continues to evolve with unique opportunities for buyers and sellers. Understanding current trends helps you make informed decisions.

### Key Market Factors
**Supply & Demand:**
- Current inventory levels and trends
- Average days on market
- Market absorption rates
- Price trends by neighborhood

**Price Trends:**
- Year-over-year price changes
- Price appreciation by area
- Forecast for next 6-12 months
- Investment opportunities

### Neighborhood Insights
**Popular Calgary Communities:**
- Downtown and surrounding areas
- Southwest Calgary (Inglewood, Bridgeland)
- Northwest Calgary (Aspen Woods, Rocky Ridge)
- Northeast Calgary
- Southeast Calgary

### Investment Opportunities
- Rental yield by neighborhood
- Cap rates in popular areas
- Growth potential in emerging areas
- Market cycles and timing

### Buyer & Seller Tips
- Best time to list your home
- Buyer demographics and preferences
- Negotiation trends
- Financing environment

For detailed market analysis and specific neighborhood insights, contact James for a personalized consultation.
    `,
  },
  {
    id: "pricing-your-home",
    title: "Pricing Your Home Right",
    description: "Learn how to set a competitive price that attracts buyers while maximizing your profit.",
    icon: "DollarSign",
    category: "guide",
    content: `
## Pricing Your Home Right

### The Price Impact
Setting the right price is critical:
- Too high: Limited showings, longer time on market
- Too low: Lost equity, regrets, quick sale stress
- Just right: Attracts qualified buyers, sells faster

### How to Price Your Home

**1. Professional Home Valuation**
- Order a professional appraisal
- Review comparable sales (comps)
- Analyze listing prices nearby
- Consider recent market activity

**2. Comparable Market Analysis (CMA)**
- Look at 3-6 recently sold homes
- Choose homes similar in:
  - Size (square footage)
  - Age and condition
  - Location and neighborhood
  - Features and amenities
- Adjust for differences

**3. Market Condition Adjustments**
- Supply and demand in your area
- Interest rates and financing availability
- Seasonal trends
- Days on market for similar homes
- Recent price trends

### Pricing Strategies

**List at Market Value:**
- Attracts serious buyers
- Creates competitive environment
- Sells faster
- Fewer negotiations

**Price Slightly Below Market:**
- Generates more showings
- Creates bidding competition
- Can result in higher final price
- More showings = more offers

### Avoiding Pricing Mistakes
- Don't overprice based on improvements you made
- Don't ignore market conditions
- Don't compare to pre-recession prices
- Don't ignore local neighborhood factors
- Don't set price without professional analysis

### Working with Your Agent
James can help you:
- Research comparable sales
- Analyze market conditions
- Adjust for property features
- Set a strategic price
- Monitor and adjust if needed

Contact James for a professional market analysis and pricing consultation.
    `,
  },
  {
    id: "selling-timeline",
    title: "Real Estate Selling Timeline",
    description: "Understand the timeline from listing to closing so you can plan accordingly.",
    icon: "FileText",
    category: "guide",
    content: `
## Real Estate Selling Timeline

### Pre-Listing Phase (4-8 Weeks)
**Weeks 1-2: Preparation**
- Meet with real estate agent
- Plan repairs and improvements
- Get home inspection
- Hire professional photographer

**Weeks 3-4: Getting Ready**
- Complete necessary repairs
- Deep clean and stage home
- Prepare documentation
- Price the home competitively

**Weeks 5-8: Final Preparation**
- List the home
- Schedule open houses
- Begin showing process
- Market the property

### Active Listing Phase (Days 1-60)
**Days 1-14: Generate Interest**
- First showings and feedback
- Open houses
- Marketing campaign
- Review initial offers

**Days 15-30: Attract Offers**
- Continued showings
- Price adjustment if needed
- Negotiate with interested buyers
- Accept an offer

**Days 31-60: Negotiation Period**
- Respond to counteroffers
- Possibly accept offers
- Finalize sale agreement
- Buyer inspections begin

### Under Contract Phase (30-45 Days)
**Week 1: Inspection Period**
- Buyer's inspector visits
- Receive inspection report
- Negotiate any repairs
- Buyer financing approval begins

**Week 2-3: Appraisal & Financing**
- Appraisal completed
- Buyer secures final approval
- Final walkthrough scheduled
- Closing arrangements made

**Week 4-6: Final Steps**
- Clear any remaining issues
- Prepare for closing
- Final walkthrough
- Transfer utilities
- Arrange move-out

### Closing Phase (Final Days)
**Days 1-3: Final Documents**
- Review closing statement
- Gather required documents
- Prepare cashier's check
- Coordinate final details

**Closing Day**
- Sign final documents
- Funds transferred
- Keys handed over
- Congratulations on your sale!

**After Closing**
- Update address with utilities
- File mail forwarding
- Update insurance
- Final move completion

### Timeline Variations
- Typical: 45-90 days from listing to closing
- Fast market: 30-45 days
- Slow market: 90-180+ days
- Factors: Season, market conditions, pricing, condition

Contact James to create a customized timeline for your specific situation.
    `,
  },
  {
    id: "choosing-real-estate-agent",
    title: "How to Choose a Real Estate Agent",
    description: "Important factors to consider when selecting an agent to represent you in your sale.",
    icon: "Users",
    category: "guide",
    content: `
## How to Choose a Real Estate Agent

### Why the Right Agent Matters
Your real estate agent is one of the most important decisions you'll make:
- Responsible for marketing your home
- Handles negotiations and contracts
- Coordinates inspections and appraisals
- Manages closing process
- Can significantly impact your final price

### What to Look For

**Experience & Track Record**
- Years in the business
- Number of homes sold
- Average sale price range
- Client testimonials and reviews
- Current market activity

**Local Market Knowledge**
- Understands your neighborhood
- Knows comparable sales
- Familiar with local trends
- Connected with other agents
- Can price competitively

**Communication Skills**
- Responds promptly to inquiries
- Explains process clearly
- Listens to your needs
- Provides regular updates
- Available when you need them

**Marketing Expertise**
- Professional photography
- Strong online presence
- Effective listing descriptions
- Social media strategy
- Open house experience

**Negotiation Skills**
- Represents your interests strongly
- Gets best possible price
- Handles difficult negotiations
- Understands contracts
- Protects you throughout process

### Questions to Ask Agents

1. How long have you been selling real estate?
2. How many homes have you sold in my neighborhood?
3. What's your average days on market?
4. How do you market homes?
5. What's your commission structure?
6. How often will you communicate with me?
7. Can you provide references from past clients?
8. What's your experience with homes like mine?
9. How do you price homes?
10. Will you personally handle my sale?

### Red Flags to Avoid
- Unwilling to provide references
- Pressure to list at unrealistic price
- Limited market knowledge
- Poor communication
- One-size-fits-all approach
- Inflexible commission structure
- No online presence or marketing plan

### Interview Multiple Agents
- Talk to at least 2-3 agents
- Compare experience and approach
- Trust your instincts
- Choose someone who listens
- Ensure good communication fit

### Working with James
James brings:
- 10+ years of experience
- Deep Calgary market knowledge
- Data-driven approach
- Excellent communication
- Strong negotiation skills
- Professional marketing
- Client-first philosophy

Contact James for a free consultation about your selling goals.
    `,
  },
];
