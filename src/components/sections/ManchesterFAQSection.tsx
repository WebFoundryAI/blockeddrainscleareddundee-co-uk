import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MANCHESTER_FAQS = [
  {
    question: "How much does it cost to unblock a drain in Manchester?",
    answer: "Most straightforward drain unblocking jobs cost between £80 and £150. The exact price depends on the type of blockage and how accessible your drains are. We always give you a fixed quote before we start any work—no surprises on your bill."
  },
  {
    question: "How quickly can you get to me in an emergency?",
    answer: "For emergency call-outs in Manchester, we typically arrive within 60–90 minutes. We operate 24/7 including evenings, weekends, and bank holidays, with no extra charge for out-of-hours calls."
  },
  {
    question: "Who is responsible for blocked drains outside my property?",
    answer: "If the blockage is in a private drain that only serves your property, it's your responsibility. If it's in a shared sewer or lateral drain (one that connects multiple properties to the public sewer), United Utilities is responsible. We can help you identify which applies and advise on next steps."
  },
  {
    question: "Do you cover Salford, Stockport, and Didsbury?",
    answer: "Yes—we cover all areas of Greater Manchester including Salford, Stockport, Didsbury, Chorlton, Altrincham, Bolton, Oldham, Rochdale, Sale, and surrounding areas. If you're within about 15 miles of Manchester city centre, we can help."
  },
  {
    question: "Do I need a CCTV survey, or can you just unblock the drain?",
    answer: "For a one-off blockage, we can usually clear it without a survey. However, if you're experiencing repeated blockages, slow drainage, or you're buying a property, a CCTV survey is worth the investment. It lets us see exactly what's happening inside the pipe and identify any underlying problems."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, bank transfer, and all major debit and credit cards. Payment is due on completion of the work. For larger repair jobs, we can discuss payment options before we start."
  },
  {
    question: "Can you unblock a drain the same day?",
    answer: "In most cases, yes. We aim for same-day service for all blocked drain calls in Manchester. For emergencies like sewage backing up or flooding, we prioritise urgent attendance and can often be with you within the hour."
  },
  {
    question: "What causes drains to block?",
    answer: "The most common causes are fat and grease build-up in kitchen drains, hair and soap in bathroom drains, tree roots growing into pipes, and foreign objects being flushed. Older properties with clay pipes are particularly prone to root intrusion and pipe deterioration."
  },
  {
    question: "Do you offer a guarantee on your work?",
    answer: "Yes. All our unblocking work comes with a satisfaction guarantee. For drain repairs and relining, we provide written guarantees covering materials and workmanship. The exact terms depend on the type of repair carried out."
  },
  {
    question: "Are your engineers qualified and insured?",
    answer: "Absolutely. All our drainage engineers are fully trained, experienced, and DBS checked. We carry public liability insurance up to £5 million, so you're fully protected if anything goes wrong."
  },
  {
    question: "Will I need to dig up my garden for drain repairs?",
    answer: "Not always. We offer no-dig repair options including patch lining and full relining that can fix cracked or damaged pipes without excavation. We'll always recommend the least disruptive solution that properly fixes the problem."
  },
  {
    question: "Can you help with a pre-purchase drain survey?",
    answer: "Yes, we regularly carry out CCTV drain surveys for homebuyers. We'll inspect the drainage system, identify any issues, and provide a detailed report with video footage you can share with your solicitor or use in negotiations."
  }
];

export function ManchesterFAQSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Frequently Asked Questions About Blocked Drains in Manchester
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common questions from Manchester homeowners about our drainage services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {MANCHESTER_FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// Export FAQs for schema generation
export const manchesterFaqs = MANCHESTER_FAQS;
