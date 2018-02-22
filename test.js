
const fs = require('fs');

let nodes = require('./default.json');

function handleNodes(nodes){

	nodes.forEach(tmpNode=>{
		// console.log(node);
		let node = JSON.parse(JSON.stringify(tmpNode));

		delete node.parent;
		delete node.nodes;

		let filepath = __dirname + '/nodes/' + node._id + '.json';
		fs.writeFileSync(filepath, JSON.stringify(node,null,2));

		if(tmpNode.nodes && tmpNode.nodes.length){
			// fs.mkdirSync('./nodes/');	
			handleNodes(tmpNode.nodes)
		}

	})
}

handleNodes(nodes);