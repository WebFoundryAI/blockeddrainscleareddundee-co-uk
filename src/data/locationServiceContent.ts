/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  dundee: {
    neighborhoods: ["City Centre", "Stobswell", "Lochee", "Menzieshill", "Downfield", "Fintry", "Hilltown", "West End"],
    landmarks: ["the V&A Dundee", "the Tay Road Bridge", "Discovery Point", "Dundee Law", "the Overgate Centre"],
    drainageInfo: "Dundee's drainage infrastructure reflects the city's long industrial and maritime history. The older tenement areas of Stobswell and Hilltown sit on Victorian-era clay pipe networks, while the city centre has undergone significant drainage modernisation alongside the waterfront regeneration. Dundee's hilly terrain — dominated by Dundee Law — creates steep drainage gradients that can accelerate flow but also increase the risk of erosion in ageing pipes. The proximity of many properties to the Tay estuary adds tidal and groundwater considerations for lower-lying areas around the docks and waterfront.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian tenements, modern waterfront apartments, traditional stone-built houses, and commercial premises"
  },
  "broughty-ferry": {
    neighborhoods: ["Beach Crescent", "Forthill", "Barnhill", "Claypotts", "Panmurefield", "Balgillo"],
    landmarks: ["Broughty Castle", "Broughty Ferry Beach", "Barnhill Rock Garden", "Claypotts Castle", "the Esplanade"],
    drainageInfo: "Broughty Ferry's status as Dundee's most desirable coastal suburb brings distinctive drainage challenges. The area's handsome Victorian and Edwardian stone villas along the seafront and in Forthill have original clay pipe drainage systems, many over a century old. Coastal proximity means saltwater influence on underground infrastructure, while sandy soil near the beach can shift around pipes. The mature gardens and tree-lined streets of Barnhill contribute to root intrusion risks, and ongoing property conversions alter original drainage layouts.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian stone villas, Edwardian detached houses, seaside cottages, modern conversions, and period terraces"
  },
  monifieth: {
    neighborhoods: ["Ashludie", "Grange", "Milton of Monifieth", "South Monifieth", "Riverview"],
    landmarks: ["Monifieth High Street", "the Dighty Water", "Riverview Park", "Ashludie Hospital grounds", "the seafront"],
    drainageInfo: "Monifieth's position between the Tay estuary and the Dighty Water creates specific drainage considerations. The town centre's traditional stone-built properties have ageing clay pipe drainage, while the newer housing estates in Ashludie and South Monifieth feature modern plastic systems that occasionally suffer from construction-related settling. Coastal proximity near the seafront affects groundwater levels, and the Dighty Water's flood plain can influence drainage performance during wet weather.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone-built cottages, Victorian villas, modern housing estates, and bungalows"
  },
  carnoustie: {
    neighborhoods: ["Barry", "Panbride", "Carnoustie Town Centre", "Carlogie", "Westfield"],
    landmarks: ["Carnoustie Golf Links", "Carnoustie High Street", "Barry Buddon", "the seafront promenade", "Panmure Estate"],
    drainageInfo: "Carnoustie's coastal location on the North Sea and its mix of historic town centre properties with modern residential estates present varied drainage challenges. The town's famous golf links area has sandy soil that provides natural drainage but can allow pipe movement. Properties near the Barry Burn and the seafront face tidal and groundwater influences, while the older stone buildings along the High Street have Victorian-era drainage that requires specialist attention.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone-built terraces, Victorian villas, modern family homes, and coastal properties"
  },
  arbroath: {
    neighborhoods: ["Cliffburn", "Hospitalfield", "Keptie", "Warddykes", "Arbirlot", "Timmergreens"],
    landmarks: ["Arbroath Abbey", "Arbroath Harbour", "the Signal Tower Museum", "Victoria Park", "Arbroath Cliffs"],
    drainageInfo: "Arbroath's fishing harbour heritage and sandstone town centre mean much of the original drainage infrastructure is Victorian or older. The harbour area is susceptible to tidal influences, while the cliffside properties along the coastal path face exposure to salt spray and wind-driven rain that accelerates pipe deterioration. The newer housing estates in Warddykes and Cliffburn have modern drainage systems, but the town's ageing sewer infrastructure can create shared drainage issues during heavy rainfall.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "traditional sandstone terraces, harbourside cottages, modern family housing, and commercial premises"
  },
  forfar: {
    neighborhoods: ["Lour", "Glamis Road area", "Wellbraehead", "Queenswell", "Kingsmuir", "Padanaram"],
    landmarks: ["Forfar Loch", "the Meffan Museum", "Forfar Athletic FC", "the Reid Hall", "Balmashanner Hill"],
    drainageInfo: "Forfar's inland market town setting provides different drainage challenges to Dundee's coastal areas. The town centre's older stone-built properties have period clay pipe drainage systems, while the estates around Queenswell and Kingsmuir are relatively modern. Forfar Loch influences local groundwater levels in the eastern part of town, and the clay-heavy agricultural soil in surrounding areas can cause seasonal ground movement that stresses pipe joints. The town's Victorian-era combined sewer system can become overwhelmed during heavy rainfall.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone-built villas, Victorian terraces, 1960s-70s housing, modern family homes, and rural properties"
  },
  perth: {
    neighborhoods: ["North Muirton", "Letham", "Craigie", "Tulloch", "Bridgend", "Scone", "Cherrybank"],
    landmarks: ["Perth Concert Hall", "the River Tay", "Scone Palace", "North Inch", "Perth Racecourse"],
    drainageInfo: "Perth's position at the tidal limit of the River Tay creates significant drainage considerations. The city centre's Georgian and Victorian properties have period drainage systems, while areas like Letham, North Muirton, and Tulloch feature mid-century housing with ageing concrete and clay pipe networks now reaching the end of their design life. The River Tay's flood risk is well documented, with properties in Bridgend and along the North and South Inch particularly susceptible to high water table conditions. Perth's rapid growth has put pressure on older combined sewer systems.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "Georgian townhouses, Victorian stone villas, mid-century council housing, modern executive homes, and commercial premises"
  },
  "newport-on-tay": {
    neighborhoods: ["Wormit", "Woodhaven", "Norwood", "Kirk Road area", "Tayfield Estate"],
    landmarks: ["the Tay Road Bridge", "Tayfield Estate", "Balgove Bay", "Newport Pier", "Wormit Bay"],
    drainageInfo: "Newport-on-Tay's elevated position overlooking the Tay estuary from the Fife shore brings specific drainage challenges. The village's traditional stone-built properties have period drainage running down steep gradients towards the river, creating flow velocity issues and potential erosion in older clay pipes. The Wormit area, developed largely in the Victorian era to serve the Tay Bridge railway, has ageing infrastructure. Sandy soil near the foreshore can shift around pipe runs, while mature gardens throughout the village contribute to root intrusion risks.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian stone villas, traditional Fife cottages, modern detached houses, and period conversions"
  },
  tayport: {
    neighborhoods: ["Scotscraig", "Ferry Road area", "the Common", "Shanwell", "Tentsmuir area"],
    landmarks: ["Tayport Harbour", "Tentsmuir Forest", "the Larick Centre", "Tayport Common", "the old railway path"],
    drainageInfo: "Tayport's coastal position at the mouth of the Tay estuary and its proximity to Tentsmuir Forest bring distinctive drainage challenges. The older village centre has traditional stone-built properties with Victorian drainage, while the more recent housing along the Scotscraig and Shanwell areas has modern systems. Sandy coastal soil near Tentsmuir provides good natural drainage but can allow pipe movement and sand infiltration. The harbour area experiences tidal influences, and properties near the Common can face waterlogging during prolonged wet weather.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone cottages, Victorian terraces, modern family housing, and coastal properties"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  dundee: {
    "blocked-drains": {
      intro: "Dundee's varied architectural heritage means blocked drains can affect anything from a Victorian tenement in Stobswell to a modern waterfront apartment by the V&A. Our experienced engineers understand the unique drainage challenges facing properties across the city and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in busy restaurant areas around the city centre", "Tree root intrusion from mature street trees in the West End", "Debris accumulation in Victorian clay pipes in Hilltown and Stobswell", "Wet wipe blockages in student accommodation near the universities", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near Dundee's tree-lined streets in the West End and Downfield should consider annual drain inspections to catch root intrusion early."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Dundee, you need a fast response from engineers who know the local area. Whether you're in Lochee, Stobswell, or Fintry, our drain unblocking teams are strategically positioned across the city to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in tenement properties", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Dundee's busy restaurants and cafes along Perth Road and the Nethergate benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Dundee property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Dundee's older properties with Victorian-era drainage.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from subsidence"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Dundee's older areas like Stobswell or the West End? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Dundee's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Dundee's water supply from Lintrathen and Backwater reservoirs contributes to mineral deposits in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Dundee emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the city. From Menzieshill family homes to Stobswell tenement flats, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Dundee location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Dundee's mix of historic tenement housing and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Subsidence-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Dundee's clay and boulder clay subsoil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  "broughty-ferry": {
    "blocked-drains": {
      intro: "Broughty Ferry's reputation as one of Dundee's most desirable suburbs comes with distinctive drainage challenges. The area's substantial Victorian and Edwardian stone-built properties feature original clay drainage systems, while tree-lined streets and mature gardens contribute to root intrusion issues. Our Broughty Ferry specialists understand these local factors and deliver effective blocked drain solutions.",
      commonProblems: ["Tree root intrusion from mature gardens and avenues", "Aged clay pipe deterioration in period villas", "Fat buildup from busy household kitchens", "Sand infiltration in properties near the beach", "Shared drainage in converted period properties"],
      process: "We approach Broughty Ferry blocked drains with appreciation for the area's period properties. Our clearing methods are effective yet gentle on original drainage features, preserving the integrity of your home's infrastructure.",
      localTip: "Broughty Ferry's mature trees along Brook Street and Fort Street are a root intrusion risk. Consider annual CCTV checks if you have large trees near your drainage runs."
    },
    "drain-unblocking": {
      intro: "Broughty Ferry residents deserve drain unblocking services that match the quality of their homes. Our local teams respond promptly to calls from Forthill to Barnhill, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption.",
      commonProblems: ["Bathroom drain clogs", "Kitchen sink blockages", "External gulley obstructions", "Downpipe connections", "Cellar drainage issues"],
      process: "Our Broughty Ferry engineers understand period property drainage. We use appropriate techniques for each situation, whether that's careful rodding of delicate clay pipes or jetting for more robust modern sections.",
      localTip: "Broughty Ferry's Victorian properties often have drainage running beneath conservatories and extensions. Know your drainage routes before planning building work."
    },
    "cctv-drain-surveys": {
      intro: "Broughty Ferry's premium property market makes thorough drainage assessment essential for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage in the area's sought-after Victorian and Edwardian homes.",
      commonProblems: ["Pre-purchase condition assessment", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Insurance requirements"],
      process: "We survey Broughty Ferry properties with appreciation for their character and value. Our reports are comprehensive and professional, suitable for property transactions and insurance purposes.",
      localTip: "Broughty Ferry home sellers can benefit from proactive drainage surveys, addressing any issues before they become negotiating points in Dundee's most competitive property market."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Broughty Ferry's period drainage at peak performance. Our careful approach removes decades of accumulated deposits from Victorian clay pipes, restoring flow capacity while preserving the integrity of original drainage features.",
      commonProblems: ["Scale from water supply", "Grease accumulation over time", "Root mass removal", "Sand and silt from coastal proximity", "Pre-survey preparation"],
      process: "Broughty Ferry's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage.",
      localTip: "Broughty Ferry's coastal position means sandy deposits can accumulate in pipes. Periodic jetting maintains optimal performance and extends drainage lifespan."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Broughty Ferry receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a Victorian stone villa or flooding in a converted flat, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into cellars", "Garden flooding from blocked drains", "Manhole overflows", "Drain collapse affecting foundations", "Persistent foul odours"],
      process: "Emergency response to Broughty Ferry properties is swift and professional. We understand the area's property values and act to minimise damage and disruption while resolving the underlying problem.",
      localTip: "Broughty Ferry properties with cellars should ensure drainage pumps and non-return valves are regularly serviced to prevent backup during storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Broughty Ferry's character properties requires specialist knowledge and sympathetic approaches. Our repair team works with all property ages, from original Victorian installations to modern connections, always selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking", "Root damage to joints", "Ground movement effects from sandy soil", "Historical modification issues", "Coastal salt exposure deterioration"],
      process: "We investigate Broughty Ferry drainage issues thoroughly, recommending repairs that suit your property's age and construction. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens and original features.",
      localTip: "Broughty Ferry's sandy coastal soil can cause seasonal pipe movement — flexible repair solutions like pipe relining accommodate this better than rigid replacements."
    }
  },
  monifieth: {
    "blocked-drains": {
      intro: "Monifieth's position between the Tay estuary and the Dighty Water, combined with its mix of historic and modern housing, creates diverse drainage challenges. Our Monifieth blocked drain specialists understand how coastal proximity and river levels affect drainage systems, from the traditional High Street properties to Ashludie's newer housing developments.",
      commonProblems: ["Silt and sediment accumulation from river proximity", "Root intrusion from mature garden trees", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in shared Victorian drainage"],
      process: "We assess your Monifieth property's position relative to the Dighty Water and coastline before selecting clearing methods. Coastal properties may require different approaches than those further inland. Our engineers are experienced with all Monifieth property types and drainage configurations.",
      localTip: "Monifieth properties near the Dighty Water should ensure external drains have adequate gully pots to catch debris before it enters the pipe system, particularly after heavy rain."
    },
    "drain-unblocking": {
      intro: "When drains block in Monifieth, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Ashludie or an overflowing external drain near the seafront, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Monifieth engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Monifieth's High Street properties often have rear drainage running through neighbouring land. Know your drainage easements to avoid disputes."
    },
    "cctv-drain-surveys": {
      intro: "Monifieth's architectural variety, from traditional stone-built properties to modern estates in Ashludie, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing in Monifieth's older conservation area around the High Street? CCTV surveys can identify period drainage features that may need specialist attention."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Monifieth's varied drainage systems often need. From clearing scale deposits in traditional stone-built properties to routine maintenance for modern systems in Ashludie, our jetting service restores optimal drainage performance across the area.",
      commonProblems: ["Scale accumulation from water supply", "Grease buildup in residential drains", "Silt deposits from surface water drainage", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage to your drainage system.",
      localTip: "Monifieth properties near the coast and the Dighty Water benefit from periodic jetting to remove silt and mineral deposits before they restrict flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Monifieth receive rapid response from our local teams, day or night. From flooded gardens near the seafront to sewage issues in Ashludie, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our Monifieth service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Monifieth's riverside and coastal properties are prone to surface water issues during heavy rain and high tides. Keeping gullies clear helps prevent property flooding."
    },
    "drain-repairs": {
      intro: "Monifieth's diverse property ages mean drain repairs must be tailored to specific situations. Whether you need no-dig relining for a Victorian pipe near the High Street or excavation repairs in a newer Ashludie property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "Damage from external factors"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and any ongoing maintenance requirements. All repairs are guaranteed for your peace of mind.",
      localTip: "Monifieth's sandy coastal soil can cause seasonal pipe movement. Consider flexible repair solutions that accommodate ground conditions."
    }
  },
  carnoustie: {
    "blocked-drains": {
      intro: "Carnoustie's coastal setting and its mix of historic town centre properties with modern residential estates present a varied set of drainage challenges. From the traditional stone-built properties along the High Street to the newer family homes in Carlogie and Westfield, our Carnoustie blocked drain experts bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Sand infiltration into coastal drainage systems", "Root intrusion from established garden trees", "Fat and grease buildup from domestic kitchens", "Shared drainage blockages in terraced housing", "Surface water issues near the Barry Burn"],
      process: "Carnoustie's varied property types demand flexible approaches. We assess each situation individually, considering property age, pipe material, and the area's specific coastal and environmental factors before selecting our clearing method.",
      localTip: "Carnoustie properties near the Barry Burn and the golf links should have drainage inspected regularly, as sandy soil and water table levels affect pipe integrity."
    },
    "drain-unblocking": {
      intro: "When Carnoustie drains need unblocking, our local teams cover the entire area from the town centre to Barry and Panbride. We handle everything from simple kitchen sink blockages to complex shared drainage issues in the area's traditional terraced properties.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages from hair and soap", "External gulley obstructions from fallen leaves", "Interceptor trap blockages in older properties", "Washing machine and utility drain problems"],
      process: "Our Carnoustie engineers arrive with comprehensive unblocking tools suited to the area's property mix. We identify the obstruction quickly and clear it completely, testing flow restoration before finishing the job.",
      localTip: "Carnoustie's terraced streets in the town centre often share rear drainage — if neighbours are experiencing slow drains too, the blockage is likely in the shared section."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Carnoustie property's drainage is essential for effective maintenance. Our CCTV surveys provide detailed pipe condition assessments, particularly valuable for the area's period properties and coastal homes where sand infiltration and saltwater exposure can accelerate deterioration.",
      commonProblems: ["Sand and silt infiltration assessment", "Age-related pipe deterioration in older properties", "Root ingress from mature gardens", "Drainage route mapping before renovations", "Condition assessment for property purchases"],
      process: "We survey Carnoustie drainage methodically, recording condition and mapping routes. This is especially important for coastal properties where ground conditions can affect pipe stability.",
      localTip: "Buying a property in Carnoustie's older streets? Always commission a full CCTV drain survey — coastal areas may have ground conditions that affect pipe stability."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Carnoustie's varied drainage systems, from traditional stone-built properties in the town centre to modern family homes in Westfield. Our specialist equipment clears the silt, scale, and debris that accumulate in local drainage throughout the area.",
      commonProblems: ["Sand and silt accumulation from coastal proximity", "Scale buildup from water supply", "Grease accumulation in residential drains", "Root fragments requiring clearance", "Pre-survey cleaning for accurate assessment"],
      process: "We match jetting equipment to Carnoustie's pipe types and conditions. Period drainage receives careful, lower-pressure treatment, while modern systems can handle more thorough cleaning for optimal results.",
      localTip: "Carnoustie's coastal properties experience faster silt accumulation than inland areas. Consider jetting every 12 months rather than the usual 18 to maintain optimal flow."
    },
    "emergency-drain-services": {
      intro: "Carnoustie drainage emergencies receive rapid response from our local teams, whether you're dealing with flooding near the seafront or sewage backup in Carlogie. Our engineers are available around the clock, equipped to handle emergencies across the Carnoustie area.",
      commonProblems: ["Surface water flooding during heavy rainfall", "Sewage backing up into ground-floor rooms", "Manhole overflows on residential streets", "Drain collapses after ground saturation", "Coastal storm drainage emergencies"],
      process: "Emergency calls from Carnoustie receive immediate dispatch. We provide realistic arrival times and come prepared with pumping equipment and emergency repair materials to contain damage and resolve the situation.",
      localTip: "Carnoustie properties near the Barry Burn should maintain clear surface water drains year-round, as burn levels can rise rapidly after sustained rainfall in the Angus hills."
    },
    "drain-repairs": {
      intro: "Carnoustie's drainage spans from original stone-built channels to modern plastic systems, and our repair teams work confidently with all types. Whether it's relining Victorian pipes in the town centre or replacing collapsed sections near the seafront, we select repair methods suited to each property's age and coastal conditions.",
      commonProblems: ["Cracked pipes from sand movement", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Saltwater corrosion affecting connections", "Sand infiltration through damaged joints"],
      process: "We investigate thoroughly before recommending Carnoustie drainage repairs. Our approach accounts for the area's terrain and coastal ground conditions, using durable materials that provide long-lasting results.",
      localTip: "Carnoustie's sandy coastal soil can make excavation repairs more straightforward than in rocky areas — but pipe bedding must be done carefully to prevent future settlement."
    }
  },
  arbroath: {
    "blocked-drains": {
      intro: "Arbroath's fishing harbour heritage and sandstone town centre mean many properties sit atop Victorian or older drainage systems that require specialist attention. Our Arbroath blocked drain service covers everything from the traditional properties around the harbour to the modern estates in Warddykes and Cliffburn, bringing local expertise to every callout.",
      commonProblems: ["Root intrusion from established trees and hedgerows", "Fat and grease buildup in domestic kitchens", "Debris accumulation in older sandstone drainage systems", "Surface water blockages from coastal debris", "Shared drainage conflicts in terraced housing"],
      process: "We assess each Arbroath blockage considering the property type, drainage age, and local conditions. Traditional harbour-area properties need different handling than modern estates, and our engineers adapt their approach accordingly.",
      localTip: "Arbroath properties near the harbour and cliffs should have drainage inspected after periods of heavy rainfall and storm surges when debris and silt can accumulate rapidly."
    },
    "drain-unblocking": {
      intro: "When Arbroath drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Keptie to Hospitalfield, we handle residential and commercial drain unblocking with professional efficiency and minimal disruption.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older properties", "Commercial drainage issues"],
      process: "Our Arbroath engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Arbroath's new town housing in Warddykes was built with shared drainage systems. If your neighbours also have slow drains, the blockage is likely in the communal section — contact us to investigate."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Arbroath property's drainage is essential, particularly for the town's older sandstone buildings and harbour-area properties. Our CCTV surveys reveal the condition of pipes beneath your property, identifying deterioration that surface inspection cannot detect.",
      commonProblems: ["Age-related pipe deterioration in Victorian systems", "Salt exposure damage near the coast", "Root ingress from established gardens", "Pipe condition assessment for home purchases", "Joint and connection problems from ground settling"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Arbroath properties near the cliffs and harbour face accelerated pipe deterioration from salt exposure — a CCTV survey reveals how much service life remains."
    },
    "drain-jetting": {
      intro: "Arbroath's ageing town centre drainage benefits greatly from regular high-pressure jetting maintenance. Our specialist equipment removes the deposits that accumulate over decades in Victorian clay and sandstone pipes, maintaining optimal flow in domestic and commercial drainage systems throughout the town.",
      commonProblems: ["Scale buildup in ageing pipes", "Grease accumulation", "Sand and silt from coastal proximity", "Root fragment removal", "General maintenance needs"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting the integrity of ageing pipe infrastructure. We verify results with flow testing.",
      localTip: "Arbroath businesses around the harbour and High Street should consider scheduled jetting as part of their maintenance regime, particularly fish processing and food preparation premises."
    },
    "emergency-drain-services": {
      intro: "Arbroath drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded ground floor in Keptie or sewage backup in Hospitalfield, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes", "Collapsed drainage from ageing infrastructure", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Arbroath's harbour-area drainage can become overwhelmed during storms and high tides. Keep emergency drain contacts readily available, especially during autumn and winter months."
    },
    "drain-repairs": {
      intro: "Arbroath's property stock spans traditional sandstone harbour-area buildings to modern family homes, and our drain repair expertise matches this diversity. From relining Victorian pipes in the town centre to replacing damaged sections in Warddykes, we provide repair solutions appropriate to each property type.",
      commonProblems: ["Cracked sandstone drainage channels", "Clay pipe deterioration from age and salt exposure", "Joint failures from ground movement", "Root damage from established trees", "Ground settling effects on newer developments"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Arbroath's coastal location means salt exposure accelerates pipe deterioration — ensure repair materials are selected for durability in the local environment."
    }
  },
  forfar: {
    "blocked-drains": {
      intro: "Forfar's market town character and surrounding rural communities present varied drainage challenges. Our Forfar blocked drain specialists understand the differences between period stone properties in the town centre and the newer estates around Queenswell and Kingsmuir, bringing the right expertise to every callout.",
      commonProblems: ["Root intrusion from mature garden trees and hedgerows", "Fat and grease buildup from busy household kitchens", "Debris accumulation in period clay pipes", "Surface water blockages from agricultural runoff", "Shared drainage issues in terraced housing"],
      process: "We assess each Forfar blockage considering the property type, pipe age, and drainage layout. Period properties in the town centre need different handling than the modern estates, and our engineers adapt their approach accordingly.",
      localTip: "Forfar's mature gardens along Glamis Road and Academy Street pose significant root intrusion risks — schedule annual CCTV inspections if you have large trees within 5 metres of drainage runs."
    },
    "drain-unblocking": {
      intro: "When drains block in Forfar, our local teams respond promptly with the right equipment for every property type. From period homes in the town centre to modern family houses in Kingsmuir, we clear blockages efficiently while respecting your property.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs in family homes", "External gulley obstructions from garden debris", "Utility room and laundry drain blockages", "Commercial drainage issues on the High Street"],
      process: "Our Forfar engineers arrive equipped for the area's varied property types. We locate the blockage precisely, select the least disruptive clearing method, and restore full drainage flow.",
      localTip: "Forfar properties with gravel driveways should fit gulley guards to prevent stones entering surface water drains."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a stone villa on Glamis Road or investigating drainage at a Forfar business, our CCTV surveys provide the detailed assessment you need. We reveal the true condition of pipes beneath Forfar's diverse range of properties.",
      commonProblems: ["Pre-purchase surveys for period stone villas", "Root ingress investigation in mature gardens", "Mapping complex drainage in commercial premises", "Condition assessment of Victorian pipe systems", "Insurance and renovation planning requirements"],
      process: "We survey Forfar properties thoroughly, documenting all drainage routes including connections to outbuildings and extensions. Reports are detailed and professional, suitable for property transactions and insurance purposes.",
      localTip: "Planning an extension on your Forfar home? A pre-build CCTV drain survey identifies any pipes that need protecting or redirecting before construction begins."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Forfar's period and modern drainage at peak performance. Our careful approach removes accumulated deposits from Victorian clay pipes in the town centre and clears root masses from garden-heavy properties, restoring optimal flow throughout your system.",
      commonProblems: ["Root mass accumulation from garden trees", "Scale deposits from water supply", "Grease and fat buildup over time", "Silt and garden debris in surface water drains", "General maintenance for residential drainage networks"],
      process: "We adjust jetting pressure and nozzle selection to suit each pipe's material and age. Forfar's older properties receive gentler treatment that effectively clears deposits without risking damage to original drainage.",
      localTip: "Forfar properties with large gardens should combine annual jetting with root inhibitor treatment to keep drainage clear year-round."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Forfar demand swift, professional response. Whether you're facing sewage backup in a period villa or flooding at a Queenswell family home, our emergency teams are available around the clock to protect your property from damage.",
      commonProblems: ["Sewage backing up into ground floors", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Drain collapse beneath driveways and patios", "Storm water overwhelming period drainage systems"],
      process: "Emergency calls from Forfar are prioritised and dispatched immediately. Our engineers understand the area's property types and act quickly to contain damage while implementing effective, lasting solutions.",
      localTip: "Forfar properties near Forfar Loch may experience increased surface water runoff during heavy rain — ensure gullies and downpipe connections are clear."
    },
    "drain-repairs": {
      intro: "Repairing drainage beneath Forfar's varied properties requires specialist care. Our repair teams work with all property ages across the area, from restoring Victorian clay pipes in period stone villas to fixing modern systems in Kingsmuir and Queenswell.",
      commonProblems: ["Root damage to clay pipe joints", "Cracked pipes beneath driveways and patios", "Displaced joints from ground movement", "Age-related deterioration of period drainage", "Damage from extension and renovation projects"],
      process: "We investigate thoroughly and recommend repairs suited to your property's character. No-dig relining preserves mature gardens and landscaping, while excavation is reserved for severe damage requiring full replacement.",
      localTip: "Forfar's clay-heavy agricultural soil causes seasonal ground movement — flexible repair solutions like pipe relining accommodate this better than rigid replacements."
    }
  },
  perth: {
    "blocked-drains": {
      intro: "Perth's position at the tidal limit of the River Tay, combined with its Georgian and Victorian heritage, creates distinctive drainage challenges. Our Perth blocked drain specialists understand how the river and its flood plain affect drainage systems, from the city centre's period townhouses to modern estates in Letham and North Muirton.",
      commonProblems: ["Silt and sediment accumulation from river proximity", "Root intrusion from mature trees along the Inches", "Fat and grease from commercial kitchens", "Debris buildup in Victorian drainage", "Shared drainage issues in older residential areas"],
      process: "We assess your Perth property's position relative to the River Tay before selecting clearing methods. Properties near the river may require different approaches than those on higher ground. Our engineers are experienced with all Perth property types and drainage configurations.",
      localTip: "Perth properties near the North and South Inch and the River Tay should ensure external drains have adequate gully pots to catch debris before it enters the pipe system."
    },
    "drain-unblocking": {
      intro: "When drains block in Perth, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Letham or an overflowing external drain in Bridgend, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Perth engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Perth's city centre properties often have complex drainage arrangements running beneath historic buildings. Know your drainage layout to speed up diagnosis."
    },
    "cctv-drain-surveys": {
      intro: "Perth's architectural variety, from Georgian townhouses in the city centre to modern estates in Tulloch, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing in Perth's Georgian conservation area? CCTV surveys can identify period drainage features that may need specialist attention and help protect your investment."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Perth's varied drainage systems often need. From clearing scale deposits in Georgian and Victorian pipes to routine maintenance for modern systems in North Muirton, our jetting service restores optimal drainage performance across the city.",
      commonProblems: ["Scale accumulation from water supply", "Grease buildup in residential drains", "Silt deposits from river proximity", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage to your drainage system.",
      localTip: "Perth properties near the River Tay benefit from periodic jetting to remove silt and mineral deposits that accumulate from high water table conditions."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Perth receive rapid response from our local teams, day or night. From flooded properties in Bridgend to sewage issues in Craigie, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "River-related flooding and drainage overload", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our Perth service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Perth's riverside properties are prone to flooding during high river levels. Keeping gullies clear and fitting non-return valves helps prevent property flooding during extreme weather."
    },
    "drain-repairs": {
      intro: "Perth's diverse property ages mean drain repairs must be tailored to specific situations. Whether you need no-dig relining for a Georgian pipe in the city centre or excavation repairs in a newer Letham property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "River flooding damage to drainage infrastructure"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and any ongoing maintenance requirements. All repairs are guaranteed for your peace of mind.",
      localTip: "Perth's alluvial soil near the River Tay can cause seasonal pipe movement. Consider flexible repair solutions that accommodate the area's ground conditions."
    }
  },
  "newport-on-tay": {
    "blocked-drains": {
      intro: "Newport-on-Tay's elevated position overlooking the Tay estuary creates specific drainage considerations, from steep gradients and flow velocity issues to Victorian pipe systems in the village's traditional stone villas. Our Newport-on-Tay blocked drain specialists understand how the terrain and coastal proximity affect drainage systems across the village and neighbouring Wormit.",
      commonProblems: ["Root intrusion from mature gardens and established trees", "Fat and grease buildup from domestic kitchens", "Debris accumulation in Victorian clay pipes", "Surface water issues on steep gradients", "Shared drainage in converted period properties"],
      process: "We assess your Newport-on-Tay property's position and drainage layout before selecting clearing methods. Properties on steep slopes may require different approaches than those nearer the foreshore. Our engineers are experienced with all property types across the village.",
      localTip: "Newport-on-Tay's steep streets mean drainage flows at higher velocities, which can erode older clay pipe joints. Properties on slopes should have drainage checked more frequently."
    },
    "drain-unblocking": {
      intro: "When drains block in Newport-on-Tay, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Wormit or an overflowing external drain near Woodhaven, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages in period properties", "Washing machine drain problems"],
      process: "Our Newport-on-Tay engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Newport-on-Tay's older properties along Kirk Road often have rear drainage running through neighbouring land. Know your drainage easements to avoid disputes."
    },
    "cctv-drain-surveys": {
      intro: "Newport-on-Tay's desirable property market, from Victorian stone villas to modern detached houses, makes drainage condition assessment increasingly important. Our CCTV surveys reveal exactly what's inside your pipes, providing essential information for property transactions and ongoing maintenance.",
      commonProblems: ["Erosion assessment on steep gradient pipes", "Age-related pipe deterioration in Victorian properties", "Root ingress from established gardens", "Drainage route mapping before renovations", "Condition assessment for property purchases"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any gradient-specific issues. The final report includes annotated footage, a condition summary, and maintenance recommendations.",
      localTip: "Purchasing a Victorian villa in Newport-on-Tay? A pre-purchase CCTV survey is essential — steep gradients accelerate pipe wear and hidden defects are common in older properties."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Newport-on-Tay's drainage systems often need. Our service removes silt, scale, and debris deposits from Victorian pipes and clears accumulated material from properties throughout the village and Wormit.",
      commonProblems: ["Silt and debris accumulation from steep gradients", "Scale buildup from water supply", "Grease accumulation in residential drains", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. Steep gradient properties often have concentrated deposits at bends and junctions that require specific nozzle selection.",
      localTip: "Newport-on-Tay's steep drainage gradients can concentrate debris at bends and pipe junctions. Regular jetting prevents these accumulation points from becoming blockages."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Newport-on-Tay receive rapid response from our local teams, day or night. From flooded gardens in Wormit to sewage issues near Woodhaven, our engineers are ready to tackle any emergency and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Surface water flooding on steep streets", "Overflowing inspection chambers", "Collapsed drains in sandy foreshore soil", "Storm damage affecting drainage systems"],
      process: "Emergency calls to our Newport-on-Tay service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Newport-on-Tay's steep terrain means surface water runoff can be intense during heavy rain. Keeping gullies clear along your property boundary helps prevent flooding."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Newport-on-Tay requires understanding the specific challenges of steep gradients, sandy foreshore soil, and the village's mix of Victorian and modern properties. Our repair specialists select methods and materials suited to these local conditions, ensuring lasting results.",
      commonProblems: ["Eroded pipe joints from high flow velocity", "Root damage from garden vegetation", "Joint displacement from ground movement", "Age-related deterioration of Victorian pipes", "Gradient-related erosion damage"],
      process: "We assess Newport-on-Tay drainage repairs with the local terrain in mind. Materials are chosen for durability, and repair methods account for the gradient and soil conditions prevalent across the village.",
      localTip: "Newport-on-Tay's steep gradients mean pipe repairs must account for flow velocity — ensure your repair contractor reinforces joints and bends where erosion risk is highest."
    }
  },
  tayport: {
    "blocked-drains": {
      intro: "Tayport's coastal position at the mouth of the Tay estuary and its proximity to Tentsmuir Forest bring distinctive drainage challenges. Our Tayport blocked drain service covers everything from the traditional stone cottages in the village centre to the newer housing in Scotscraig and Shanwell, bringing local expertise to every callout.",
      commonProblems: ["Sand infiltration from coastal proximity", "Root intrusion from established village trees and hedgerows", "Fat and grease buildup in domestic kitchens", "Debris accumulation in older stone drainage systems", "Surface water blockages from leaf litter"],
      process: "We assess each Tayport blockage considering the property type, drainage age, and coastal conditions. Traditional village properties need different handling than modern estates, and our engineers adapt their approach accordingly.",
      localTip: "Tayport properties near the harbour and Tentsmuir Forest should have drainage inspected after periods of heavy rainfall and autumn leaf fall when debris and sand can accumulate rapidly."
    },
    "drain-unblocking": {
      intro: "When Tayport drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From the harbour area to Scotscraig, we handle residential drain unblocking with professional efficiency and minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older properties", "Utility room drainage issues"],
      process: "Our Tayport engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Tayport's older stone-built properties often have deep inspection chambers. Ensure access covers are in good condition and accessible for maintenance."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Tayport property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable in Tayport where coastal ground conditions can accelerate pipe deterioration.",
      commonProblems: ["Unknown drainage routes in period properties", "Pipe condition assessment for home purchases", "Sand and salt infiltration detection", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Tayport properties near the harbour and Tentsmuir may have unexpected drainage arrangements. Surveys help identify complex systems before problems develop."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is valuable maintenance for Tayport's drainage systems. Our specialist equipment handles everything from clearing sand deposits in coastal properties to descaling pipes in Scotscraig's modern housing, maintaining optimal flow throughout the area.",
      commonProblems: ["Sand and silt accumulation from coastal proximity", "Scale buildup from water supply", "Grease accumulation in residential drains", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Tayport's coastal properties experience faster sand and silt buildup — consider jetting every 12 months rather than the usual 18."
    },
    "emergency-drain-services": {
      intro: "Tayport drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded garden in Scotscraig or sewage backup near the harbour, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on residential streets", "Collapsed drainage from ground movement", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Tayport's coastal position means tidal and storm surge conditions can affect drainage. Keep emergency drain contacts readily available, especially during winter storms."
    },
    "drain-repairs": {
      intro: "Tayport's property stock spans traditional stone cottages to modern family homes, and our drain repair expertise matches this diversity. From relining Victorian pipes in the village centre to replacing damaged sections in Shanwell, we provide repair solutions appropriate to each property type and the coastal environment.",
      commonProblems: ["Cracked pipes from sand movement", "Clay pipe deterioration from age and salt exposure", "Joint failures from ground movement", "Root damage from established trees", "Sand infiltration through damaged joints"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Tayport's sandy coastal soil and proximity to Tentsmuir means ground conditions can vary — always commission a proper survey before planning drainage repair work."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Scottish Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Scottish Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Dundee and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Dundee and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Dundee and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Dundee and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
