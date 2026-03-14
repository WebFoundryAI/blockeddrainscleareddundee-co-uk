/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  dundee: {
    landmarks: [
      "V&A Dundee",
      "Discovery Point",
      "The Law",
      "Dundee Rep Theatre",
      "Tay Road Bridge",
      "Tay Rail Bridge",
      "Dundee Waterfront",
      "McManus Galleries",
      "Verdant Works",
      "Caird Hall",
      "DCA (Dundee Contemporary Arts)",
      "University of Dundee",
      "Abertay University",
      "Slessor Gardens",
      "City Quay",
      "Dundee Science Centre",
      "Camperdown Park",
      "Baxter Park",
      "Magdalen Green",
      "Dundee Botanic Garden",
      "St Andrew's Cathedral",
      "Howff Cemetery"
    ],
    drainageProfile: "Dundee's drainage infrastructure reflects the city's long industrial heritage as a centre of jute, jam, and journalism. The city centre features a mix of Victorian and Edwardian commercial buildings with aging clay and cast iron pipe networks. The hillside topography, rising steeply from the Tay waterfront towards The Law, creates significant gradient challenges for drainage systems. Traditional tenement buildings in areas like the West End, Stobswell, and Lochee sit on some of the oldest sewer systems in the city. The Dundee Waterfront regeneration has brought modern drainage infrastructure to the harbour area, creating a contrast with the Victorian systems still serving much of the city. Scottish Water manages the public sewer network, but private drains serving individual properties remain the owner's responsibility.",
    localFAQs: [
      {
        question: "What drainage problems are common in Dundee's tenement buildings?",
        answer: "Dundee's tenement flats often share drainage stacks and underground runs with multiple properties. Common issues include fat and grease buildup from shared kitchen stacks, root ingress from street trees into aging clay pipes, and joint failures in Victorian-era drainage. Because multiple flats connect to shared systems, a blockage in one section can affect several properties simultaneously. Regular maintenance jetting helps prevent buildup in shared drainage runs."
      },
      {
        question: "Does the Tay estuary affect drainage in Dundee?",
        answer: "Properties near the Dundee Waterfront, City Quay, and the harbour area can experience tidal backflow effects on their drainage systems during very high tides or storm surges combined with heavy rainfall. Non-return valves on drainage connections help prevent seawater or backed-up sewage from entering properties. If your property is near the waterfront and you notice drainage behaving differently during high tides, we can assess and install appropriate protection."
      },
      {
        question: "Are there particular drainage issues on the hillside areas of Dundee?",
        answer: "The steep gradients from The Law down towards the waterfront mean drainage systems in hillside areas like the West End, Blackness, and Constitution Road experience high flow velocities during heavy rainfall. While this helps clear blockages naturally, it also accelerates pipe wear and can cause erosion at joints. Conversely, properties at the bottom of hills can receive concentrated surface water runoff. CCTV surveys help identify gradient-related wear before it becomes a serious problem."
      },
      {
        question: "Who is responsible for shared drains in Dundee?",
        answer: "In Dundee, Scottish Water is responsible for the public sewer network beyond your property boundary. Private drains within your property boundary are your responsibility. For shared drains serving multiple properties—common in tenement blocks—responsibility is shared among the connected property owners. If you are unsure whether a drain is private, shared, or public, we can help determine this during a CCTV survey and advise on the correct course of action."
      }
    ],
    caseStudy: `Call-out to a Victorian tenement flat in the West End: The ground-floor owner reported sewage backing up through the kitchen sink during heavy rainfall. Our CCTV survey revealed that the shared drainage stack serving four flats had a collapsed section where the underground run passed beneath the back green. The original clay pipe had cracked due to root ingress from a mature sycamore tree, and the roots had created a dam that trapped debris. During heavy rain, the additional surface water overwhelmed the partially blocked system and forced sewage back into the lowest-connected property. We cleared the root mass using high-pressure jetting, then relined the damaged 8-metre section using trenchless technology to avoid excavating the communal garden. The relining sealed out future root ingress and restored full flow capacity. All four property owners shared the cost of the repair. Tip: ground-floor tenement flats in Dundee are most vulnerable to drainage backups in shared systems — regular CCTV checks every two to three years help catch developing problems before they cause flooding.`
  },

  "broughty-ferry": {
    landmarks: [
      "Broughty Castle",
      "Broughty Ferry Beach",
      "The Esplanade",
      "Barnhill Rock Garden",
      "Forthill",
      "Brook Street",
      "Queen Street",
      "Gray Street",
      "Broughty Ferry Harbour",
      "Claypotts Castle"
    ],
    drainageProfile: "Broughty Ferry's position as Dundee's coastal suburb brings unique drainage considerations. The area features a high proportion of Victorian and Edwardian stone-built properties, many with original clay drainage systems over a century old. Properties along the Esplanade and near the beach are built on sandy soil that can shift and cause pipe displacement. The mix of large detached villas, terraced cottages near the harbour, and modern infill developments creates a varied drainage landscape. Sandy substrates provide good natural drainage but can undermine pipe bedding over time. Scottish Water serves the area's public sewers, with many properties also having older private drainage that pre-dates modern building standards.",
    localFAQs: [
      {
        question: "Do coastal conditions affect drains in Broughty Ferry?",
        answer: "Yes, the sandy coastal soil in Broughty Ferry can shift around drainage pipes, causing settlement and joint separation over time. Salt-laden air and occasional sea spray can also accelerate corrosion of exposed metal drainage components. Properties close to the beach and the Esplanade are most affected. We recommend periodic CCTV surveys to check for sand infiltration and joint displacement before they lead to blockages."
      },
      {
        question: "Are Victorian properties in Broughty Ferry prone to drainage problems?",
        answer: "Many of Broughty Ferry's Victorian and Edwardian villas still have their original clay or stoneware drainage. While well-made, these systems are now over 100 years old and commonly suffer from root ingress at joints, lime scale buildup, and gradual joint failure. The large gardens typical of this area often contain mature trees whose roots actively seek out drainage pipes. Regular maintenance and proactive CCTV surveys help property owners manage these aging systems effectively."
      }
    ],
    caseStudy: `Call-out to a large Edwardian villa on Fort Street: The homeowners had noticed progressively slower drainage across the entire property over several months. Our CCTV investigation found that the 25-metre main drain run from the house to the public sewer had three areas of significant root ingress from mature beech trees in the garden. The roots had penetrated the original clay pipe joints and created dense root masses that were trapping fats and debris. We cleared all three root masses with high-pressure jetting, then relined the most severely affected 12-metre section to prevent regrowth. We advised the homeowners on a two-yearly jetting schedule for the remaining sections. Tip: large gardens with mature trees in Broughty Ferry almost always cause root problems for drainage — proactive inspection every two years saves significant repair costs.`
  },

  monifieth: {
    landmarks: [
      "Monifieth Beach",
      "Riverview Drive",
      "Laws Park",
      "Monifieth High Street",
      "Ashludie Hospital site",
      "Milton Mill"
    ],
    drainageProfile: "Monifieth sits on the northern shore of the Tay estuary east of Dundee, with a mix of traditional stone-built properties in the town centre and extensive modern housing developments on the outskirts. The coastal location and relatively flat terrain mean surface water drainage is an important consideration, particularly during heavy rainfall. Modern estates built since the 1970s typically feature plastic drainage that is generally in good condition, while older properties in the town centre retain original clay systems. The sandy coastal soil provides good natural permeability but can cause pipe settlement issues similar to those seen in Broughty Ferry.",
    localFAQs: [
      {
        question: "What drainage issues affect newer housing in Monifieth?",
        answer: "Modern housing estates in Monifieth generally have plastic drainage in reasonable condition, but common issues include blockages from household waste such as wet wipes and grease, and surface water drainage problems where gardens and driveways have been paved over, reducing natural soakaway capacity. If you notice surface water pooling during heavy rain, the problem may be insufficient soakaway rather than a drain blockage."
      },
      {
        question: "Is there flood risk in Monifieth?",
        answer: "Monifieth's coastal position means some lower-lying areas can be affected by a combination of high tides and heavy rainfall. Properties near the seafront should ensure their drainage systems have non-return valves fitted to prevent tidal backflow. Check SEPA flood maps for your specific location and ensure your drains are regularly maintained to handle peak flows."
      }
    ],
    caseStudy: `Call-out to a 1980s detached house on a modern estate: The homeowner reported that the downstairs toilet and kitchen sink both backed up simultaneously during heavy rain. Our investigation found that the property's foul and surface water drainage had been inadvertently connected when a conservatory was added by a previous owner. During heavy rainfall, the combined volume overwhelmed the foul sewer connection and caused backups. We separated the connections, rerouting the conservatory roof water to the surface water system where it belonged. Tip: if drains only back up during heavy rain in Monifieth, a cross-connection between foul and surface water systems is a common culprit, especially where extensions have been added.`
  },

  carnoustie: {
    landmarks: [
      "Carnoustie Golf Links",
      "Carnoustie Beach",
      "Barry Buddon",
      "High Street",
      "Carnoustie House Grounds",
      "Panmure Barry",
      "The Kinloch Arms"
    ],
    drainageProfile: "Carnoustie is best known for its championship golf links but is also a thriving residential town in Angus. The town features a historic centre with traditional stone-built properties and significant areas of post-war and modern housing development. The flat coastal terrain and sandy soil affect drainage performance, with groundwater levels varying seasonally. Older properties in the town centre have clay drainage systems that are susceptible to root ingress from the many mature trees along the streets. The town's drainage connects to Scottish Water's sewer network, with treatment capacity shared across the wider Angus area.",
    localFAQs: [
      {
        question: "Does the sandy soil in Carnoustie affect drainage?",
        answer: "Carnoustie's sandy coastal soil provides good natural drainage for surface water but can cause problems for underground pipe systems. Sand can infiltrate through damaged joints, partially filling pipes and reducing their capacity. Sandy soil also provides less stable bedding for pipes compared to clay or rock, leading to gradual settlement and joint displacement. If your drains are running slowly, sand infiltration is a common cause in Carnoustie that CCTV inspection will quickly identify."
      },
      {
        question: "What drainage services are available for commercial properties in Carnoustie?",
        answer: "We provide full commercial drainage services in Carnoustie including scheduled maintenance jetting for restaurants and food businesses, CCTV condition surveys for property managers, and emergency callouts for businesses that cannot afford disruption. The High Street's mix of hospitality and retail businesses benefits from regular grease trap maintenance and drain jetting to prevent blockages."
      }
    ],
    caseStudy: `Call-out to a traditional stone cottage near the town centre: The owners reported persistently slow drainage and a damp patch in the garden. Our CCTV survey revealed that sand had infiltrated the clay drainage through deteriorated joints over many years, reducing the pipe's effective diameter by over 50%. The accumulated sand and silt had also created a partial dam that was holding standing water, which was causing the visible damp patch above. We removed the sand using specialist suction equipment, then relined the affected section to seal the joints permanently against future infiltration. Tip: sandy soil areas in Carnoustie should have drainage checked if damp patches appear in gardens — sand infiltration is gradual but causes progressively worse problems if left untreated.`
  },

  arbroath: {
    landmarks: [
      "Arbroath Abbey",
      "Arbroath Harbour",
      "Arbroath Signal Tower Museum",
      "Victoria Park",
      "Kerr's Miniature Railway",
      "Arbroath Cliffs Trail",
      "High Street",
      "Seaton Cliffs",
      "St Vigeans"
    ],
    drainageProfile: "Arbroath is a historic harbour town with a rich heritage dating back to the Declaration of Arbroath in 1320. The town's drainage infrastructure reflects centuries of development, from the medieval core around the Abbey to Victorian industrial expansion and modern housing estates. The harbour area and properties near the Brothock Burn face particular drainage challenges from tidal influences and watercourse proximity. Red sandstone, the dominant building material, extends to many of the older drainage structures in the town. Arbroath's cliffside position on the east coast exposes drainage systems to harsh weather conditions that can accelerate deterioration.",
    localFAQs: [
      {
        question: "Do properties near Arbroath harbour have special drainage concerns?",
        answer: "Properties near Arbroath harbour and along the Brothock Burn can be affected by tidal backflow and elevated water table levels during storm conditions. The combination of high tides and heavy rainfall can overwhelm drainage systems in low-lying harbour-side areas. Non-return valves are essential for properties in these locations. If you experience drainage problems that coincide with high tides, contact us for an assessment."
      },
      {
        question: "What drainage challenges do older Arbroath properties face?",
        answer: "Arbroath's historic properties — particularly those in the town centre dating from the 18th and 19th centuries — often have original red sandstone or clay drainage that has been in service for well over 100 years. Common issues include joint failure, root ingress, and gradual deterioration of the pipe material itself. Many properties have had extensions or conversions over the decades that added connections to drainage systems not designed for the additional load. A CCTV survey is the best starting point for understanding the condition of an older property's drainage."
      }
    ],
    caseStudy: `Call-out to a harbourside property near the fish market: The business owner reported recurring sewage smells and slow drainage that worsened during high tides. Our investigation found that the property's drainage connected to an outfall that was submerged during high tide, causing tidal backflow into the system. Years of saltwater ingress had also corroded a section of the original cast iron drainage beneath the building. We fitted a non-return valve to prevent tidal backflow and relined the corroded section using a marine-grade epoxy liner. The combination eliminated both the smell and the slow drainage. Tip: Arbroath harbourside properties that smell of drains at high tide almost certainly lack non-return valves — fitting one is a straightforward fix that makes a significant difference.`
  },

  forfar: {
    landmarks: [
      "Forfar Loch",
      "Restenneth Priory",
      "The Meffan Museum & Art Gallery",
      "Castle Street",
      "East High Street",
      "Forfar Athletic FC",
      "Balmashanner Hill",
      "Forfar Country Park"
    ],
    drainageProfile: "Forfar, the county town of Angus, sits in an inland position surrounded by agricultural land. The town's drainage systems range from Victorian-era clay pipes in the historic centre to modern plastic installations in newer housing developments. Forfar Loch and its associated watercourses influence groundwater levels in parts of the town, and agricultural field drainage from the surrounding farmland can contribute to surface water volumes during heavy rainfall. The town's position in the Strathmore valley means drainage systems need to handle water from the surrounding hillsides as well as local rainfall. Scottish Water's treatment infrastructure serves the wider Angus area from facilities near the town.",
    localFAQs: [
      {
        question: "Does Forfar's rural setting affect drainage services?",
        answer: "Forfar's position as a market town surrounded by farmland means some properties — particularly on the edges of town — may have private drainage systems including septic tanks rather than mains sewer connections. Agricultural field drainage can also contribute to surface water volumes during heavy rainfall. We service both mains-connected and private drainage systems throughout Forfar and the surrounding rural area."
      },
      {
        question: "What drainage issues are common in Forfar's town centre?",
        answer: "The town centre features properties dating from the 18th and 19th centuries with original clay drainage systems. Common issues include root ingress from street trees, fat and grease buildup from food businesses, and joint failures in aging clay pipes. The historic building layout means some properties have long, complex drainage runs that are difficult to access without specialist equipment. Our CCTV cameras and flexible jetting hoses can navigate even the most challenging drainage layouts."
      }
    ],
    caseStudy: `Call-out to a terraced property on East High Street: The homeowner had been dealing with repeated kitchen drain blockages every few months. Each time, a local plumber had cleared the immediate blockage, but it kept returning. Our CCTV survey revealed the root cause — a bellied section of clay pipe beneath the back garden where ground settlement had created a low point that trapped grease and food particles. Each clearance removed the symptom but not the cause. We excavated the 3-metre bellied section and relaid it with modern plastic pipe at the correct gradient. Two years on, the homeowner has had no further blockages. Tip: recurring blockages in Forfar's older properties often indicate a structural drainage problem that simple clearing cannot fix — a CCTV survey reveals whether you need a repair rather than repeated clearance.`
  },

  perth: {
    landmarks: [
      "Perth Concert Hall",
      "Scone Palace",
      "Perth Museum and Art Gallery",
      "North Inch",
      "South Inch",
      "St John's Kirk",
      "Perth Racecourse",
      "Black Watch Castle and Museum",
      "Kinnoull Hill",
      "Perth Bridge",
      "Branklyn Garden"
    ],
    drainageProfile: "Perth, the Fair City, sits at the tidal limit of the River Tay and has a long history as one of Scotland's most important settlements. The city's drainage infrastructure includes medieval-era systems in the historic centre, extensive Victorian networks serving the Georgian and Victorian residential areas, and modern installations in the many new housing developments around the city's perimeter. The River Tay and its floodplain significantly influence drainage in lower-lying areas, with flood risk being a genuine concern for properties near North Inch and South Inch. Perth's varied geology — from river alluvium in the low-lying areas to sandstone and gravel on higher ground — creates different drainage challenges across the city.",
    localFAQs: [
      {
        question: "Is there flood risk from the River Tay in Perth?",
        answer: "Perth has experienced significant flooding from the River Tay historically, and properties in low-lying areas near North Inch, South Inch, and along the riverside remain at risk during exceptional rainfall events. The Perth Flood Protection Scheme provides significant protection, but property owners should still ensure their drainage systems are well maintained and consider non-return valves on connections near the river. Check SEPA flood risk maps for your specific property and ensure your drains can handle peak rainfall without backing up."
      },
      {
        question: "What drainage services do you offer in Perth?",
        answer: "We provide the full range of drainage services in Perth including emergency drain unblocking, CCTV drain surveys, high-pressure jetting, drain repairs, and pre-purchase surveys. Despite Perth being our furthest service area from our Dundee base, we maintain good response times thanks to our knowledge of the A90 corridor. Emergency callouts to Perth are typically attended within 90 minutes."
      }
    ],
    caseStudy: `Call-out to a Georgian townhouse on South Street: The property, divided into four flats, had a persistent problem with the ground-floor flat experiencing drainage backups whenever the upper flats used their facilities simultaneously. Our CCTV survey showed that the original Georgian drainage — remarkably still in service after over 200 years — had significant lime scale buildup that had reduced the shared stack's capacity by approximately 60%. The remaining capacity was sufficient for one or two flats but could not handle peak flow from all four. We descaled the entire shared system using controlled high-pressure jetting, restoring near-original capacity. We recommended annual maintenance jetting to prevent the limescale from rebuilding. Tip: Perth's Georgian properties often have remarkably durable original drainage, but limescale buildup in hard water areas gradually reduces capacity — regular maintenance is far cheaper than replacement.`
  },

  "newport-on-tay": {
    landmarks: [
      "Tay Road Bridge (south approach)",
      "Newport-on-Tay High Street",
      "Birkhill",
      "Wormit",
      "Tayfield Estate",
      "The Boat Brae"
    ],
    drainageProfile: "Newport-on-Tay sits on the south bank of the Tay estuary in Fife, connected to Dundee by the Tay Road Bridge. The town's elevated position above the river provides natural drainage gradients but also means systems must handle water flowing down from Wormit and the surrounding hillsides. The housing stock ranges from Victorian villas built during the town's development as a residential suburb of Dundee, through inter-war and post-war housing, to modern developments. The Fife Council area is served by Scottish Water, with drainage infrastructure maintained independently from the Dundee side of the Tay.",
    localFAQs: [
      {
        question: "Do you cover Newport-on-Tay even though it's in Fife?",
        answer: "Yes, Newport-on-Tay is within our regular service area. Despite being across the Tay from our Dundee base, the Tay Road Bridge means we can typically reach Newport-on-Tay within 20 minutes. We provide the same full range of drainage services here as we do throughout Dundee and Angus, with no additional travel charges."
      },
      {
        question: "What drainage challenges are specific to Newport-on-Tay?",
        answer: "Newport-on-Tay's hillside position means drainage systems deal with significant gradient and water flow from higher ground. During heavy rainfall, surface water from Wormit and the surrounding hills can overwhelm local drainage. The town's mix of Victorian, inter-war, and modern properties also means drainage systems of varying ages and materials exist in close proximity, which can complicate repairs when different sections use incompatible materials."
      }
    ],
    caseStudy: `Call-out to a detached house near the Boat Brae: The homeowner reported that their garden flooded during heavy rain, with water pooling against the house foundation. Our investigation found that the property's surface water drainage had been overwhelmed by runoff from the steep slope behind the house. The original soakaway had silted up over decades and no longer absorbed water effectively. We cleared and rebuilt the soakaway, added a French drain along the uphill boundary to intercept runoff before it reached the house, and connected the system to a suitable outfall. The garden has remained dry through subsequent winter storms. Tip: hillside properties in Newport-on-Tay should ensure their soakaways and surface water systems can handle runoff from uphill — these systems gradually lose capacity as they silt up.`
  },

  tayport: {
    landmarks: [
      "Tayport Harbour",
      "Tayport Common",
      "Tentsmuir Forest",
      "Tayport Links",
      "Scotscraig Golf Club",
      "The Bell Rock Tavern"
    ],
    drainageProfile: "Tayport is a small coastal town at the mouth of the River Tay in Fife, with a maritime heritage visible in its harbour and traditional fishermen's cottages. The town's drainage infrastructure includes Victorian-era systems in the historic core and newer installations serving post-war and modern housing. Tayport's exposed coastal position means drainage components face salt air corrosion, and the sandy soil near the coast can affect pipe stability. The proximity to Tentsmuir Forest means tree root ingress is a concern for properties on the edge of town. As part of Fife, the public sewer network is managed by Scottish Water's Fife operations.",
    localFAQs: [
      {
        question: "Does Tayport's coastal location affect drainage?",
        answer: "Tayport's exposed position at the mouth of the Tay means drainage systems face salt air corrosion on metal components and potential sand infiltration through damaged joints. Properties near the harbour can also experience tidal influences on their drainage during high spring tides. Regular maintenance helps identify and address these coastal-specific issues before they cause problems."
      },
      {
        question: "Is tree root ingress a problem in Tayport?",
        answer: "Properties near Tentsmuir Forest and those with mature trees in their gardens can experience root ingress into drainage pipes. Roots seek out moisture from pipe joints and small cracks, gradually growing inside the pipe until they cause blockages. Regular CCTV surveys help detect early root ingress, and root cutting followed by pipe relining provides a long-term solution."
      }
    ],
    caseStudy: `Call-out to a traditional stone cottage near the harbour: The owner reported that the outside drain regularly blocked with sand and debris, particularly after storms. Our inspection found that the property's drainage ran through sandy ground near the coast, and the original clay pipe joints had deteriorated enough to allow significant sand infiltration. Each storm deposited more sand in the pipe, causing recurring blockages. We jetted the system clear, then relined the most vulnerable 10-metre section to seal the joints against further infiltration. We also fitted a silt trap at the gully to catch wind-blown sand before it entered the drainage system. Tip: coastal properties in Tayport that experience sandy blockages after storms should investigate pipe joint condition — relining and silt traps together provide a lasting solution.`
  }
};

export function getLocationHubContent(slug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[slug];
}
