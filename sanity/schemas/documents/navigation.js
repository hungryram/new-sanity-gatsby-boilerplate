//File name: navigation.js
//File location: schemas/documents

import { BsLink } from "react-icons/bs"

export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: BsLink,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Menu Name"
          },
          {
            name: "items",
            type: "array",
            title: "Navigation links",
            of: [{ type: "navigationItem" }]
          }
    ]
}