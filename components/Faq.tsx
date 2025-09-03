import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
    
  const faqs = [
    {
      question: "What is the minimum order quantity?",
      answer: "Our minimum order quantity is 25 pieces per order for all custom products.",
    },
    {
      question: "How long does production take?",
      answer: "Standard production time is 5-7 business days after design approval.",
    },
    {
      question: "Do you offer design services?",
      answer: "Yes, we provide free design consultation and have easy-to-use design tools available.",
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept PNG, JPG, PDF, AI, and PSD files. High-resolution files work best.",
    },
    {
      question: "Can I get a sample before placing a bulk order?",
      answer: "Yes, we offer sample products for a small fee that can be credited toward your bulk order.",
    },
  ]

  
    return (
        <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )}
