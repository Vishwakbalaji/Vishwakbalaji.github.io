class ProjectsSection extends Section {
    constructor(sectionId, data) {
        super(sectionId, data.title, data.iconClass);
        this.data = data.items;
    }

    renderTimelineItemContent(itemData) {
        return `
            <h3><a href="${itemData.link}" target="_blank">${itemData.title} </a></h3>
            <p>${itemData.description}</p>
        `;
    }

    render() {
        super.renderSectionTitle();
        this.data.forEach(item => {
            super.renderTimelineItem(item);
        });
    }
}