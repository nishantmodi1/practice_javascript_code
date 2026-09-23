// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

let head={
    val:1, 
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:null
                }
            }
        }
    }
}

function CheckPalindrome(head){
  
}
CheckPalindrome(head)

// // Nodes
// let n1 = { val: 1, next: null };
// let n2 = { val: 2, next: null };
// let n3 = { val: 3, next: null };
// let n4 = { val: 4, next: null };
// let n5 = { val: 5, next: null };

// // Normal links
// n1.next = n2;
// n2.next = n3;
// n3.next = n4;
// n4.next = n5;

// // Cycle link (IMPORTANT)
// n5.next = n3;  // 🔁 creates cycle

// // Head of linked list
// let head = n1;

// function DetectCycle(head){
//   let slow=head
//   let fast=head

//   while(fast!==null && fast.next!==null){
//     slow=slow.next
//     fast=fast.next.next

//     if(slow.val===fast.val){
//       return true
//     }
//   }

//   return false
// }

// console.log(DetectCycle(head))

// function RemoveNthNodeFromEnd(head, n){
//   let dummy={val:-1, next:head}

//   let slow=dummy
//   let fast=dummy

//   for(let i=0; i<n; i++){
//     console.log(fast, fast.next)
//     fast=fast.next;
//   }
//   console.log(fast.val)

//   while(fast.next!==null){
//     slow=slow.next;
//     fast=fast.next
//     console.log(slow, fast)
//   }
//   slow.next=slow.next.next
//   console.log(JSON.stringify(dummy.next))
//   return dummy.next;
// }

// RemoveNthNodeFromEnd(head, n=3)

// let l1 = { val: 1, next: { val: 3, next: { val: 5, next: null } } };
// let l2 = { val: 2, next: { val: 4, next: { val: 6, next: null } } };

// function mergeTwoLists(l1, l2){
//   console.log(l1, l2)
//   const dummy={val:-1, next:null}
//   let current=dummy

//   while(l1!==null && l2!== null){
//     if(l1.val<=l2.val){
//       current.next=l1
//       l1=l1.next
//     }else{
//       current.next=l2
//       l2=l2.next
//     }
//     current=current.next
//   }
//   current.next=l1!==null?l1:l2
//   console.log(JSON.stringify(dummy.next))
//   return dummy.next
// }

// console.log(mergeTwoLists(l1, l2));


// Input: 1 → 2 → 3 → null
// let nodeList={
//     val:1, 
//     next:{
//         val:2,
//         next:{
//             val:3,
//             next:{
//                 val:4,
//                 next:{
//                     val:5,
//                     next:null
//                 }
//             }
//         }
//     }
// }

// function SearchaValue(head, target){
    
//     let current=head
//     console.log(current, target)
//     while(current!==null){
//         console.log(current.val)
//         if(current.val===target){
//             return true
//         }
//         current=current.next
//     }
//     return false
// }
// console.log(SearchaValue(nodeList, target=8))


// function ReverseaLinkedList(head){
//     let prev=null
//     let current=head
    
//     while(current!==null){
//         let next = current.next
//         current.next=prev // change arrow direction
//         prev=current
//         current=next
//     }
//     return prev
// }
// console.log(ReverseaLinkedList(nodeList))

// function FindMiddleValue(head){
//     let slow=head
//     let fast=head
    
//     while(fast!==null && fast.next!==null){
//         slow=slow.next
//         fast=fast.next.next
//     }
//     console.log(slow.val)
//     return slow.val
// }

// FindMiddleValue(nodeList)

// function DeleteLastNode(head){
//     if(head===null || head.next===null) return null
//     let current=head
//     console.log(current)
//     while(current.next.next!==null){
//         current=current.next
//     }
//     current.next=null
//     console.log(head)
//     return head
// }
// DeleteLastNode(nodeList)

// function DeleteFirstNode(head){
//     if(head===null) return null
//     console.log(head.next)
//     return head.next
// }
// DeleteFirstNode(nodeList)

// function AddatEnd(head, newVal){
//     console.log(head, newVal)
//     let newNode={
//         val:newVal,
//         next:null
//     }
//     if(!head) return newNode
//     let current=head
//     while(current.next!==null){
//         current=current.next
//     }
//     console.log(newNode)
//     current.next=newNode
//     return head
// }
// console.log(AddatEnd(nodeList, newVal=5))

// function AddAtBeginning(head, val){
//     // console.log(head, val)
//     let newNode={
//         val:val, 
//         next:head
//     }
//     // console.log(newNode)
//     return newNode
    
// }
// AddAtBeginning(nodeList, val=0)

// function findLastnode(head){
//     let current=head
//     let lastNode=null
//     while(current.next!==null){
//             current=current.next
//             if(current.next===null)
//             lastNode=current.val
//     }
//     return lastNode
// }

// console.log(findLastnode(nodeList))

// function CountNodes(head){
//     let count=0
//     let current=head
//     while(current!==null){
        
//         current=current.next
//         count++
//     }
//     return count
// }
// console.log(CountNodes(nodeList))

// function PrintNodes(val){
//     let result=[]
//     let current=val
    
//     while(current!==null) {
//         result.push(current.val)
//         current=current.next
//     }
//     return result
// }

// console.log(PrintNodes(nodeList))