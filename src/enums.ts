//////////////////////////////////////////////////////////////////////

// Numeric Enums and Reverse Mappings
enum Sizes {
    Small,
    Medium,
    Large
}

enum Sizes {
    ExtraLarge = 3
}

console.log(Sizes.Large, Sizes[Sizes.Large]);

//////////////////////////////////////////////////////////////////////

// String Enums and Inlining Members
enum Sizes2 {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

let selected2: Sizes2 = Sizes2.Small;

function updateSize(size: Sizes2): void {
    selected2 = size;
}

updateSize(Sizes2.Large);

console.log(selected2);