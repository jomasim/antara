function Node(data, next) {
    this.data = data;
    this.next = next;
  }
  
  function mergeLists(L1, L2) {
  
    // create new linked list pointer
    var sortedList = new Node(null, null);
    var previous = sortedList;
  
    // while both linked lists are not empty
    while (L1 !== null && L2 !== null) {
  
      if (L1.data <= L2.data) {
        previous.next = L1;
        L1 = L1.next;
      } else {
        previous.next = L2;
        L2 = L2.next;
      }
      previous = previous.next;
    }
  
   
    if (L1 === null) { previous.next = L2; }
    if (L2 === null) { previous.next = L1; }
  
    // sorted linked list
    return sortedList.next;
  
  }


  
  // first linked list
  let a = new Node(10, null);
  let b = new Node(3, a);
  let c = new Node(1, b);
  let L1 = c;
  
  // second linked list
  let d = new Node(9, null);
  let e = new Node(6, d);
  let f = new Node(5, e);
  let L2 = f;
  
 mergeLists(L1, L2); 