function searchStudent() {
    const studentId = document.getElementById('student-id').value.trim(); 

const studentData = [
    {"studentId": "202108997", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202108997", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202108997", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202108997", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202108997", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202108997", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202108997", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218588", "code": "GNED 08", "name": "Understandin the Self", "units": 3},
    {"studentId": "202218588", "code": "DCIT 25", "name": "Data Structures and Algorithms", "units": 3},
    {"studentId": "202218588", "code": "ITEC 60", "name": "Integrated Programming and Technologies 1", "units": 2},
    {"studentId": "202218588", "code": "FITT 4", "name": "Physical Activities towards Health and Fitness II", "units": 2},
    {"studentId": "202218588", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218588", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    
    {"studentId": "202218929", "code": "DCIT 25", "name": "Data Structures and Algorithms", "units": 3},
    {"studentId": "202218929", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218929", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218929", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218929", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202109679", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202109679", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202109679", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202109679", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202109679", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202109679", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218604", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218604", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218604", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218604", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218604", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218604", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218604", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218793", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218793", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218793", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218793", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218793", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218793", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218793", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218616", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218616", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218616", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218616", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218616", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218616", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218620", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218620", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218620", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218620", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218620", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218620", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218620", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202109673", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202109673", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202109673", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202109673", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202109673", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202109673", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202109325", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202109325", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202109325", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202109325", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202109325", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202109325", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202109325", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218811", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218811", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218811", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218811", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218811", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218811", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218811", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218815", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218815", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218815", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218815", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218815", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218815", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218815", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218826", "code": "WAG KANA", "name": "DI KA NAMAN MARUNONG MAGBAYAD", "units": 100},

    {"studentId": "202218828", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218828", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218828", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218828", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218828", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218828", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218829", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218829", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218829", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218829", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218829", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218829", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218829", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218651", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218651", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218651", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218651", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218651", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218651", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    
    {"studentId": "202218652", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218652", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218652", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218652", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218652", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218652", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218652", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218831", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218831", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218831", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218831", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218831", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218831", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218831", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218654", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218654", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218654", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218654", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218654", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218654", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218654", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218657", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218657", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218657", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218657", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218657", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218657", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218657", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218848", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218848", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218848", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218848", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218848", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218848", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218849", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218849", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218849", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218676", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218676", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218676", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218676", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218676", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218676", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218676", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218859", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218859", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218859", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218859", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218859", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218687", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218687", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218687", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218687", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218687", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218687", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218860", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218860", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218860", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218860", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218860", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218860", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    
    {"studentId": "202218861", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218861", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218861", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218861", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218861", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    
    {"studentId": "202218863", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218863", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218863", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218863", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218863", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218863", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    
    {"studentId": "202218700", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218700", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218700", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218700", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218700", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218700", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218871", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218871", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218871", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218871", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202109417", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202109417", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202109417", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202109417", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202109417", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202109417", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202010313", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202010313", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202010313", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202010313", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202010313", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218743", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218743", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218743", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218743", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218743", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218894", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218894", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218894", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218894", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218894", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    
    {"studentId": "202218895", "code": "GNED 06", "name": "Science, Technology, and Society", "units": 3},
    {"studentId": "202218895", "code": "GNED 03", "name": "Mathematics in the Modern World", "units": 3},
    {"studentId": "202218895", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218895", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2},
    
    {"studentId": "202218896", "code": "ITEC 50", "name": "Web System and Technologies 1", "units": 2},
    {"studentId": "202218896", "code": "FITT 2", "name": "Fitness Exercise", "units": 2},
    {"studentId": "202218896", "code": "NSTP 2", "name": "National Service Training Program 2", "units": 3},
    {"studentId": "202218896", "code": "GNED 08", "name": "Understanding the Self", "units": 3},
    {"studentId": "202218896", "code": "ITEC 65", "name": "Open Source Technology", "units": 2},
    {"studentId": "202218896", "code": "ITEC 70", "name": "Multimedia Systems", "units": 2}

];


    const subjects = studentData.filter(subject => subject.studentId === studentId);

    console.log("Filtered Subjects:", subjects);

    if (subjects.length === 0) {
        document.getElementById('generated-subjects').innerHTML = 'No subjects found for this student ID.';
        return;
    }

    let table = '<table>';
    table += '<tr><th>Subject Code</th><th>Subject Name</th><th>Units</th></tr>';

    subjects.forEach(subject => {
        table += `<tr><td>${subject.code}</td><td>${subject.name}</td><td>${subject.units}</td></tr>`;
    });

    table += '</table>';

    document.getElementById('generated-subjects').innerHTML = table;
}
