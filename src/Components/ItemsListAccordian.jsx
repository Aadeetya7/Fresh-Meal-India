import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemsList from './ItemsList';

const ItemsListAccordian = ({ data }) => {
    // console.log(data);
    const ItemsData = data?.card?.card;

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">{data?.card?.card?.title}</Typography>
                </AccordionSummary>

                <ItemsList itemData={ItemsData} />

            </Accordion>
        </>
    )
}

export default ItemsListAccordian