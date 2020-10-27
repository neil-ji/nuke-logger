const getNodeStringSubstitution = (...styles: string[]): string => {
    return styles && styles.length > 0
        ? `\x1b[${styles.join(";")}m%s\x1b[0m`
        : "";
}

export {
    getNodeStringSubstitution
}