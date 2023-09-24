export const lenghtText = (text: string, maxLength: number = 42): String => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.slice(0, maxLength) + '...';
    }
}