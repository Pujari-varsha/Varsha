function showCourseDetails(courseId) {
    const courseDetails = {
        'course1': {
            title: 'Introduction to JavaScript',
            description: 'Learn the basics of JavaScript, a powerful scripting language for web development.'
        },
        'course2': {
            title: 'HTML & CSS Fundamentals',
            description: 'Understand the core concepts of HTML and CSS to create well-structured and styled web pages.'
        },
        'course3': {
            title: 'Responsive Web Design',
            description: 'Master techniques for designing web pages that look great on all devices and screen sizes.'
        }
    };

    const details = courseDetails[courseId];
    if (details) {
        document.getElementById('courseTitle').textContent = details.title;
        document.getElementById('courseDescription').textContent = details.description;
        document.getElementById('courseDetails').style.display = 'flex';
    }
}

function closeCourseDetails() {
    document.getElementById('courseDetails').style.display = 'none';
}
