const getClickData = (button_name) => {
    let clickData = [];
    if ( sessionStorage.getItem('clickData') ) {
        clickData = JSON.parse(sessionStorage.getItem('clickData'));
    }
    const date = new Date();
    clickData.push({
        button_name: button_name,
        datetime: date.toString()
    });

    console.log("click data: ", clickData);
    sessionStorage.setItem('clickData', JSON.stringify(clickData));
}

// 로딩 시 셋팅 
window.addEventListener('DOMContentLoaded', function(){
    const setHeader = () => {
        const missions = JSON.parse(sessionStorage.getItem('mission'));
        const headerMissionList = document.querySelector('.mission-list');

        let missionList = '';
        missionList += `<h3>미션</h3>`
        missionList += `<div>결제 방식 : ${missions.method}</div>`;
        missionList += `<div>포장 여부 : ${missions.packaging}</div>`;
        missions.missions.map((e) => {
            missionList += `
                <div>
                    ${e.menu} / ${e.option} / ${e.quantity}
                </div>
            `;
        })
        console.log(headerMissionList)
        headerMissionList.innerHTML = missionList;
    }

    // setHeader();


    // add onclick
    document.getElementById('menu-link').addEventListener('click', function(event) {
        // 클릭 이벤트를 중지하고 해당 URL로 이동하는 것을 방지
        event.preventDefault();

        // 선택한 정보 가져오기
        var packing = document.getElementById('packing-input').value;

        // add Click Data
        getClickData('포장 여부: ' + packing);

        window.location.href = '/mcdonald/menu/' + '?packing=' + encodeURIComponent(packing);
    });

    document.getElementById('menu-link2').addEventListener('click', function(event) {
        // 클릭 이벤트를 중지하고 해당 URL로 이동하는 것을 방지
        event.preventDefault();

        // 선택한 정보 가져오기
        var packing = document.getElementById('packing-input2').value;

        // add Click Data
        getClickData('포장 여부: ' + packing);

        window.location.href = '/mcdonald/menu/' + '?packing=' + encodeURIComponent(packing);
    });
});
