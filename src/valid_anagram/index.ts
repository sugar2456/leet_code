export default function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    if (s === t) return true;

    const copys = s.split('');
    const copyt = t.split('');

    copys.sort();
    copyt.sort();
    return copys.join('') === copyt.join('');
}