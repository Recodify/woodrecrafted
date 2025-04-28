export const categories: string[] = ["Garden & Outdoor", "Custom Furniture", "Restoration & Repair", "Bits & Bobs"];

export function getFilterCatgories(){
    const filterCategories = categories.map(x =>x);
    filterCategories.push("All");
    return filterCategories.sort();
}

