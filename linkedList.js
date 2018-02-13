class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.count = 0;
	}
	
	get length() {
		return this.count;
	}
	
	addLast(data) {
		const node = {
			data: data,
			next: null
		};
		let curr = this.head;
		
		if (!curr) {
			this.head = node;
			this.count++;
			
			return node;
		}
		
		while (curr.next) {
			curr = curr.next;
		}
		
		curr.next = node;
		
		this.count++;
		
		return node;
	}
	
	addFirst(data) {
		const node = {
			data: data,
			next: null;
		};
		
		// grab the current head
		const temp = this.head;
		
		this.head = node;
		
		if (temp !== null) {
			this.head.next = temp;
		} else {
			this.head.next = this.tail;
		}
		
		this.count++;
    
    return node;
	}
	
	removeFirst() {
		// if count is 0 we do nothing
		
		if (this.count === 1) {
			this.head = null;
			this.tail = null;
			this.count = 0;
		} else if (this.count > 1) {
			this.head = this.head.next;
			this.count--;
		}
	}
	
	removeLast() {
		// if count is 0 we do nothing
		
		if (this.count === 1) {
			this.head = null;
			this.tail = null;
			this.count = 0;
		} else if (this.count > 1) {
			let curr = this.head;
			while (curr.next !== this.tail) {
				curr = curr.next;
			}
			curr.next = null;
			this.tail = curr;
			this.count--;
		}
	}
	
	removeAt(pos) {
		let curr = this.head,
			currcount = 1,
			nodeBefore = null;
			nodeToRemove = null;
			
		if (pos < 0 || pos > this.count || this.count === 0) {
			// invalid search
			return;
		}
		
		if (pos === 1) {
			this.removeFirst();
		} else {
			while (currcount < pos) {
				nodeBefore = curr;
				curr = curr.next;
				currcount++;
			}
			nodeBefore.next = curr.next;
			curr = null;
			this.count--;
		}
	}
	
	searchNodeAt(pos) {
		let curr = this.head,
			currcount = 1;
			
		if (pos < 0 || pos > this.count || this.count === 0) {
			// invalid search
			return;
		}
		
		while (currcount < pos) {
			curr = curr.next;
			currcount++;
		}
		
		return curr;
	}
}
