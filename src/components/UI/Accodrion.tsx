
'use client';

import { Accordion, AccordionItem } from "@heroui/react";

type AccordionCompProps = {
    items: Array<{ id: string, content: string, }>
}

export default function AccordionComp({ items }: AccordionCompProps) {

    return (
        <Accordion 
        selectionMode="multiple" 
        variant='bordered'>
            {items.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    aria-label={`Accordion ${index}`}
                    title={item.content}>
                    {item.content}
                </AccordionItem>))}
        </Accordion>
    );
}
