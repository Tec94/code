(define (problem prob2matrix)
	(:domain matrix)
	(:objects
    	x1 y1 x2 y2 x3 y3 x4 y4 - position
        n1 n2 n3 n4 n5 n6 n7 n8 n9 n10 n11 n12 n13 n14 n15 - value
	)
    (:init
        (top_most y1)
        (bottom_most y4)
        (left_most x1)
        (right_most x4)

        (nearby_left x1 x2) (nearby_right x2 x1)
        (nearby_left x2 x3) (nearby_right x3 x2)
        (nearby_left x3 x4) (nearby_right x4 x3)

        (nearby_up y1 y2) (nearby_down y2 y1)
        (nearby_up y2 y3) (nearby_down y3 y2)
        (nearby_up y3 y4) (nearby_down y4 y3)

        ; generate a solvable 4x4 sliding matrix
        (numbr_at_pos n4 x1 y1)  (numbr_at_pos n8 x2 y1)  (numbr_at_pos n15 x3 y1) (numbr_at_pos n14 x4 y1)
        (numbr_at_pos n9 x1 y2)  (numbr_at_pos n3 x2 y2)  (numbr_at_pos n13 x3 y2) (numbr_at_pos n10 x4 y2)
        (numbr_at_pos n11 x1 y3) (numbr_at_pos n6 x2 y3)  (numbr_at_pos n2 x3 y3)  (numbr_at_pos n1 x4 y3)
        (numbr_at_pos n7 x1 y4)  (numbr_at_pos n12 x2 y4) (numbr_at_pos n5 x3 y4)  (empty_at_pos x4 y4)

    )
	(:goal (and
        (numbr_at_pos n1 x1 y1)  (numbr_at_pos n2 x2 y1)  (numbr_at_pos n3 x3 y1)  (numbr_at_pos n4 x4 y1)
        (numbr_at_pos n5 x1 y2)  (numbr_at_pos n6 x2 y2)  (numbr_at_pos n7 x3 y2)  (numbr_at_pos n8 x4 y2)
        (numbr_at_pos n9 x1 y3)  (numbr_at_pos n10 x2 y3) (numbr_at_pos n11 x3 y3) (numbr_at_pos n12 x4 y3)
        (numbr_at_pos n13 x1 y4) (numbr_at_pos n14 x2 y4) (numbr_at_pos n15 x3 y4) (empty_at_pos x4 y4)
    ))
)