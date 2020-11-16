const path = require("path");

module.exports = {
    require: [path.join(__dirname, "src/global.css")],

    styles: {
        StyleGuide: {
            content: {
                maxWidth: "auto",
            },
        },
        Playground: {
            preview: {
                overflowX: "auto",
            },
        },
    },
    sections: [
        {
            name: "Main",
            // content: 'pages/main.md',
            sections: [
                {
                    name: "Flex Box Tricks",
                    content: "pages/flex-box-tricks.md",
                },
            ],
            // components: ['src/components/**/*.{js,jsx}']
        },
    ],
};
