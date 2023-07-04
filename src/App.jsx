import { useState } from 'react'

import { Accordion } from '@patternfly/elements/react/pf-accordion/pf-accordion.js';
import { AccordionHeader } from '@patternfly/elements/react/pf-accordion/pf-accordion-header.js';
import { AccordionPanel } from '@patternfly/elements/react/pf-accordion/pf-accordion-panel.js';
import { Button } from '@patternfly/elements/react/pf-button/pf-button.js'

export default function App() {
  const [index, setIndex] = useState(0)

  return (
    <>
      <Button onClick={() => setIndex(index >= 2 ? 0 : index + 1)}>ENHANCE!</Button>
      <Accordion expandedIndex={[index]}>
        <AccordionHeader><h2>1</h2></AccordionHeader>
        <AccordionPanel><h2>1</h2></AccordionPanel>
        <AccordionHeader><h2>2</h2></AccordionHeader>
        <AccordionPanel><h2>2</h2></AccordionPanel>
        <AccordionHeader><h2>3</h2></AccordionHeader>
        <AccordionPanel><h2>3</h2></AccordionPanel>
      </Accordion>
    </>
  )
}
