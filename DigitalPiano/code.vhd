-- User Interface
    architecture Behavioral of projPiano is
    note_in <= note_next;
    process (CLK,RST)                       
        -- use a count variable to keep track of the amount of time that has passed. 
        -- use a halfsec variable set to half a second worth of time and use pause as 0.1 sec to 
-- control how long a note is played
        variable count : integer range 0 to 2000000000;
        variable halfsec : integer range 0 to 2000000000 := 50000000;
        variable pause : integer range 0 to 2000000000 :=   10000000;
        
        -- set the notes as variables to their corresponding 
-- logic vectors to cleanly play the different notes

        constant C : std_logic_vector := "00001"; -- C
        constant D : std_logic_vector := "00011"; -- D
        constant E : std_logic_vector := "00101"; -- E
        constant F : std_logic_vector := "00110"; -- F
        constant G : std_logic_vector := "01000"; -- G
        constant A : std_logic_vector := "01010"; -- A
        constant B : std_logic_vector := "01100"; -- B
        constant Z : std_logic_vector := "00000"; -- scilent
        
        begin
            if(RST = '1') then
                note_next <= (others => '0');
            elsif (CLK'event and CLK='1') then
            if (switch(0) = '1')then
                count := count+1;
            end if;        
            
            if(count > 1 and count < halfsec) then
                note_next <= A;
            elsif(count > halfsec and count < 2*halfsec) then
                note_next <= D;
            elsif(count > 2*halfsec and count < 3*halfsec) then
                note_next <= E;
            elsif(count > 3*halfsec and count < 4*halfsec) then
                note_next <= F;
            elsif(count > 4*halfsec and count < 5*halfsec) then
                note_next <= E;
            elsif(count > 5*halfsec and count < 6*halfsec) then
                note_next <= D;
            elsif(count > 6*halfsec and count < 6*halfsec + pause) then
                note_next <= Z;
            elsif(count > 6*halfsec + pause and count < 8*halfsec) then
                note_next <= D;
            
            elsif(count > 7*halfsec and count < 9*halfsec) then
                note_next <= A;
            elsif(count > 9*halfsec and count < 10*halfsec) then
                note_next <= D;
            elsif(count > 10*halfsec and count < 11*halfsec) then
                note_next <= E;
            elsif(count > 11*halfsec and count < 12*halfsec) then
                note_next <= F;
                
            elsif(count > 12*halfsec and count < 13*halfsec) then
                note_next <= E;
            elsif(count > 13*halfsec and count < 14*halfsec) then
                note_next <= D;
            elsif(count > 14*halfsec and count < 16*halfsec) then
                note_next <= E;
            elsif(count > 16*halfsec and count < 17*halfsec) then
                note_next <= F;
            elsif(count > 17*halfsec and count < 17*halfsec + pause) then
                note_next <= Z;
            elsif(count > 17*halfsec + pause and count < 19*halfsec) then
                note_next <= F;
            
            else
                note_next <= Z;
            end if;


        end if;
    end process; 
    end Behavioral;
