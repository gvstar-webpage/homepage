fetch('members.json')
    .then(response => response.json())
    .then(members => {
        const list = document.getElementById('members-list');
        members.forEach(member => {
            const li = document.createElement('li');
            li.textContent = `${member.name} - ${member.email}`;
            list.appendChild(li);
        });
    })
    .catch(error => console.error('Error loading the members:', error));