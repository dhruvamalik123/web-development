    #include <iostream>  
    using namespace std;  
    struct node {  
        int element;  
        struct node* left;  
        struct node* right;  
    };  
    struct node* createNode(int val)  
    {  
        struct node* Node = (struct node*)malloc(sizeof(struct node));  
        Node->element = val;  
        Node->left = NULL;  
        Node->right = NULL;  
        return (Node);  
    }  
    void traverseInorder(struct node* root)  
    {  
        if (root == NULL)  
            return;  
        traverseInorder(root->left);  
        cout<<" "<<root->element<<" ";  
        traverseInorder(root->right);  
    }  
    int main()  
    {  
        struct node* root = createNode(50);  
        root->left = createNode(21);  
        root->right = createNode(76);  
        root->left->left = createNode(4);  
        root->left->right = createNode(32);  
        root->left->left->left = createNode(2);  
        root->left->left->right = createNode(15); 
        root->right->left = createNode(64);  
        root->right->right = createNode(100);
        root->right->left->right = createNode(70);     
        root->right->right->left = createNode(85);     
        cout<<"\n The Inorder traversal of given binary tree is -\n";  
        traverseInorder(root);
        cout<<"\n\n Name:: Ritik Manak" ; 
        cout<<"\n UID:: 20BCS4361" ;
        return 0;  
    }  
