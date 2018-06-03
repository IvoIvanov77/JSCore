/**
 * Created by Ivaylo on 6/2/2018.
 */

function solve(input) {

    class System{
        constructor(name){
            this.name = name;
            this.candidates = new Map();
        }

        addCandidate(candidate){
            if(this.candidates.has(candidate.name)){
                this.candidates.get(candidate.name).votes += candidate.votes
            }else{
                this.candidates.set(candidate.name, candidate);
            }
        }

        get winner(){
            let winner = [...this.candidates.values()]
                .sort((c1, c2) => c2.compareTo(c1))[0];
            winner.votes = this.votes;
            return winner;
        }

        get votes(){
            return [...this.candidates.values()].map(c => c.votes)
                .reduce((total, votes) => total + votes);
        }
    }
//-------------------------------------------------------------------------
    class Candidate{
        constructor(name, votes){
            this._name = name;
            this._votes = votes;
        }

        get votes() {
            return this._votes;
        }

        get name() {
            return this._name;
        }

        set votes(votes){
            this._votes = votes;
        }

        compareTo(other){
            return this._votes - other.votes;
        }
    }
//--------------------------------------------------------
    class TopCandidate extends Candidate{
        constructor(name){
            super(name, 0);
            this._sytems = [];
        }

        getSortedSystems (){
            return this._sytems.sort((s1, s2) => s2.votes - s1.votes);
        }

        getPercent(totalVotes){
            return this.votes / totalVotes * 100;
        }

        addSystem(system){
            this._sytems.push(system);
            this.votes += system.votes;
        }
    }
//-----------------------------------------------------------
    let election = new Map();
    let totalVotes = 0;
    for (let obj of input) {
        let systemName = obj.system;
        let candidateName = obj.candidate;
        let votes = obj.votes;
        let candidate = new Candidate(candidateName, votes);
        if(!election.has(systemName)){
            election.set(systemName, new System(systemName));
        }
        election.get(systemName).addCandidate(candidate);
        totalVotes += votes;
    }

    let result = new Map();

    election.forEach((v, k) => result.set(k, v.winner));

    let winnerList = new Map();

    for (let entry of result) {
        let system = {
            name : entry[0],
            votes : entry[1]._votes
        };
        let candidate = new TopCandidate(entry[1]._name);
        if(!winnerList.has(candidate.name)){
            winnerList.set(candidate.name, candidate);
        }
        winnerList.get(candidate.name).addSystem(system);

    }

    let ranking = [...winnerList.values()].sort((c1, c2) =>c2.compareTo(c1));
    let winner = ranking[0];
    let runnerUp = ranking[1];
    let winnerPercent = winner.getPercent(totalVotes);

    if(winnerPercent === 100){
        return `${winner.name} wins with ${winner.votes} votes
${winner.name} wins unopposed!`
    }else if(winnerPercent > 50){
        let systemsToString = '';
        runnerUp. getSortedSystems()
            .forEach(s => systemsToString += `${s.name}: ${s.votes}\n`);

        return `${winner.name} wins with ${winner.votes} votes
Runner up: ${runnerUp.name}
${systemsToString.trim()}`
    }else{
        let runnerUpPercent = runnerUp.getPercent(totalVotes);
        return `Runoff between ${winner.name} with ${Math.floor(winnerPercent)}% ` +
        `and ${runnerUp.name} with ${Math.floor(runnerUpPercent)}%`
    }
}



console.log(solve([
        { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
        { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
        { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
        { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
        { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
        { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
        { system: 'Omicron', candidate: 'Octocat',       votes: 75 }
    ]
));


