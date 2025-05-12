export function caesarCypher(str: string, offset: number) {
    return [...str]
        .map(function shift(character) {
            let initialOffset = 'a'.charCodeAt(0);
            if (character !== character.toLowerCase())
                // sets the initial offset
                initialOffset = 'A'.charCodeAt(0);
            if (
                character.charCodeAt(0) - initialOffset < 0 ||
                character.charCodeAt(0) - initialOffset >= 26
            )
                // checks if character is a letter of the alphabet
                return character;
            return String.fromCharCode(
                ((character.charCodeAt(0) - initialOffset + offset) % 26) +
                    initialOffset,
            );
        })
        .join('');
}
