var EasyStar=EasyStar||{};EasyStar.Node=function(f,k,a,l,d){this.parent=f;this.x=k;this.y=a;this.costSoFar=l;this.simpleDistanceToTarget=d;this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}};EasyStar.Node.OPEN_LIST=0;EasyStar.Node.CLOSED_LIST=1;EasyStar.PriorityQueue=function(f,k){this.length=0;var a=[],l=!1;if(k==EasyStar.PriorityQueue.MAX_HEAP)l=!0;else if(k==EasyStar.PriorityQueue.MIN_HEAP)l=!1;else throw k+" not supported.";this.insert=function(b){if(!b.hasOwnProperty(f))throw"Cannot insert "+b+" because it does not have a property by the name of "+f+".";a.push(b);this.length++;d(this.length-1)};this.getHighestPriorityElement=function(){return a[0]};this.shiftHighestPriorityElement=function(){if(0>this.length)throw"There are no more elements in your priority queue.";
var b=a[0],m=a.pop();this.length--;a[0]=m;h(0);return b};var d=function(b){if(0!==b){var a=Math.floor(b/2)-1;i(b,a)&&(g(b,a),d(a))}},h=function(b){left=2*b+1;right=2*b+2;i(left,b)?(g(b,left),h(left)):i(right,b)?(g(b,right),h(right)):0!=b&&h(0)},g=function(b,d){var f=a[b];a[b]=a[d];a[d]=f},i=function(b,d){if(void 0===a[d]||void 0===a[b])return!1;"function"===typeof a[b][f]?(selfValue=a[b][f](),targetValue=a[d][f]()):(selfValue=a[b][f],targetValue=a[d][f]);return l?selfValue>targetValue?!0:!1:selfValue<
targetValue?!0:!1}};EasyStar.PriorityQueue.MAX_HEAP=0;EasyStar.PriorityQueue.MIN_HEAP=1;EasyStar.js=function(f,k){var a=!0,l={},d,h,g,i,b,m,q={},p,s=Number.MAX_VALUE;this.setGrid=function(c){d=c};this.setPath=function(c,e,j,l){p=new EasyStar.PriorityQueue("bestGuessDistance",EasyStar.PriorityQueue.MIN_HEAP);a=!0;q={};g=c;i=e;b=j;m=l;if(void 0===d)throw"You can't set a path without first calling setCollisionGrid on the EasyStar.js";if(0>g||0>i||0>b||0>b||g>d[0].length-1||i>d.length-1||b>d[0].length-1||m>d.length-1)throw"Your start or end point is outside the scope of your grid.";g===
b&&i===m&&k([]);c=d[m][b];e=!1;for(j=0;j<f.length;j++)if(c===f[j]){e=!0;break}!1===e?k(null):(a=!1,p.insert(t(g,i,null,10)))};this.calculate=function(){if(!(void 0===d||!0===a))for(h=0;h<s;){if(0===p.length){k(null);a=!0;break}var c=p.getHighestPriorityElement();if(0<c.y&&(r(c,0,-1,10),!0===a))break;if(c.x<d[0].length-1&&(r(c,1,0,10),!0===a))break;if(c.y<d.length-1&&(r(c,0,1,10),!0===a))break;if(0<c.x&&(r(c,-1,0,10),!0===a))break;p.shiftHighestPriorityElement();c.list=EasyStar.Node.CLOSED_LIST;h++}};
this.setIterationsPerCalculation=function(c){s=c};this.setAcceptableTiles=function(c){f=c};this.avoidAdditionalPoint=function(c,b){l[c+"_"+b]=1};var r=function(c,e,j,i){e=c.x+e;j=c.y+j;if(b===e&&m===j){a=!0;var n=[],g=0;n[g]={x:e,y:j};g++;n[g]={x:c.x,y:c.y};g++;for(var h=c.parent;null!=h;)n[g]={x:h.x,y:h.y},g++,h=h.parent;n.reverse();k(n)}if(void 0===l[e+"_"+j])for(n=0;n<f.length;n++)if(d[j][e]===f[n]){e=t(e,j,c,i);void 0===e.list?(e.list=EasyStar.Node.OPEN_LIST,p.insert(e)):e.list===EasyStar.Node.OPENLIST&&
c.costSoFar+i<e.costSoFar&&(e.costSoFar=c.costSoFar+i,e.parent=c);break}},t=function(c,a,d,f){if(void 0!==q[c+"_"+a])return q[c+"_"+a];var g=10*Math.floor(Math.sqrt((a-c)*(a-c)+(m-b)*(m-b))),d=new EasyStar.Node(d,c,a,null!==d?d.costSoFar+f:0,g);return q[c+"_"+a]=d}};