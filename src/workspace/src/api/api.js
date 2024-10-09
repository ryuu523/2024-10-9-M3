export async function getFieldData() {
    try {
        const res = await fetch("http://localhost:8084/api/field", {
            method: "GET",
            headers: { "Content-Type": "application/json" },

        })
        const data = await res.json()
        // console.log(data.field);

        return data.field

    }
    catch (e) {
        console.log(e.message);
    }
}

export async function getScores() {
    try {
        const res = await fetch("http://localhost:8084/api/score", {
            method: "GET",
            headers: { "Content-Type": "application/json" },

        })
        const data = await res.json()

        return data

    }
    catch (e) {
        console.log(e.message);
    }
}

export async function postScore(nickname, score) {
    try {
        const res = await fetch("http://localhost:8084/api/score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "nickname": nickname, "score": parseInt(score) })
        })
        const data = await res.json()
        return data

    }
    catch (e) {
        console.log(e.message);
    }
}

export async function updateNickname(id, nickname) {
    try {
        const res = await fetch("http://localhost:8084/api/score/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "id": parseInt(id), "nickname": nickname })
        })
        const data = await res.json()
        
        return data.message

    }
    catch (e) {
        console.log(e.message);
    }
}

export async function DeleteScore(id) {
    try {
        const res = await fetch("http://localhost:8084/api/score/" + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },

        })
        const data = await res.json()

        return data.message

    }
    catch (e) {
        console.log(e.message);
    }
}
export function login(){
    return "gdhaihiyewiuti723yuqf7yga[@@pgpao"
}