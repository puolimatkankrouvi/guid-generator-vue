import type { GuidListItem } from "@/interfaces/guidListItem";
import { v4 as randomGuid } from 'uuid';

export const generateGuidListItems = (): Array<GuidListItem> => {
    const guidListitems: Array<GuidListItem> = [];

    for (let i = 0; i < 100; i++) {
        guidListitems.push({
            guid: randomGuid(),
        });
    }

    return guidListitems;
}
