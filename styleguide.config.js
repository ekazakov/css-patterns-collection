const path = require('path');

module.exports = {
    require: [path.join(__dirname, 'src/global.css')],
    components: ['src/new_components/**/*.{ts,tsx}', 'src/new_containers/**/*.{ts,tsx}'],

    styles: {
        StyleGuide: {
            content: {
                maxWidth: 'auto'
            }
        },
        Playground: {
            preview: {
                overflowX: 'auto'
            }
        }
    },
    sections: [
        {
            name: 'Main',
            content: 'pages/main.md',
            sections: [
                {
                    name: 'Sample',
                    content: 'pages/sample.md'
                }
            ]
            // components: ['src/components/**/*.{js,jsx}']
        },
    ]
};
