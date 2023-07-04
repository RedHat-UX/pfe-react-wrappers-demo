// @ts-check
import { useState } from 'react'

import { Accordion } from '@patternfly/elements/react/pf-accordion/pf-accordion.js';
import { AccordionHeader } from '@patternfly/elements/react/pf-accordion/pf-accordion-header.js';
import { AccordionPanel } from '@patternfly/elements/react/pf-accordion/pf-accordion-panel.js';
import { Button } from '@patternfly/elements/react/pf-button/pf-button.js'
import { Badge } from '@patternfly/elements/react/pf-badge/pf-badge.js'
import { Card } from '@patternfly/elements/react/pf-card/pf-card.js'

export default function App() {
  const [index, setIndex] = useState(0)

  return (
    <>
      <Card id="card">
        <h2 slot="header">The expanded panel is <Badge number={index + 1}/></h2>
        <p>
          Demonstration of React as "orchestrator" or web component state.
          <small>
            Note that React is not neccessary in this role,
            and that by wrapping web components in react components,
            we enable a piecemeal migration path without "The Big Rewrite".
          </small>
        </p>
        <Accordion single
                   expandedIndex={[index]}
                   onExpand={({ target }) => { setIndex(target.expandedIndex.at(0)); }}>
          <AccordionHeader><h2>1</h2></AccordionHeader>
          <AccordionPanel><h2>1</h2></AccordionPanel>
          <AccordionHeader><h2>2</h2></AccordionHeader>
          <AccordionPanel><h2>2</h2></AccordionPanel>
          <AccordionHeader><h2>3</h2></AccordionHeader>
          <AccordionPanel><h2>3</h2></AccordionPanel>
        </Accordion>
        <Button onClick={() => setIndex(index >= 2 ? 0 : index + 1)}>ENHANCE!</Button>
      </Card>
    </>
  )
}
